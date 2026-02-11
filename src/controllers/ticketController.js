const fs = require("fs/promises");
const path = require("path");

const DATA_PATH = path.join(__dirname, "../../data/tickets.json");

async function readTickets() {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    // Se o arquivo não existir ainda, cria
    if (err.code === "ENOENT") {
      await fs.writeFile(DATA_PATH, "[]");
      return [];
    }
    throw err;
  }
}

async function writeTickets(tickets) {
  await fs.writeFile(DATA_PATH, JSON.stringify(tickets, null, 2));
}

exports.getTickets = async (req, res) => {
  const tickets = await readTickets();
  res.json(tickets);
};

exports.getTicketById = async (req, res) => {
  const id = Number(req.params.id);
  const tickets = await readTickets();
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) return res.status(404).json({ message: "Ticket não encontrado" });

  res.json(ticket);
};

exports.createTicket = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "Campos obrigatórios: title, description"
    });
  }

  const tickets = await readTickets();

  const newTicket = {
    id: Date.now(),
    title: String(title).trim(),
    description: String(description).trim(),
    status: "open",
    createdAt: new Date().toISOString(),
    updatedAt: null
  };

  tickets.push(newTicket);
  await writeTickets(tickets);

  res.status(201).json(newTicket);
};

exports.updateTicketStatus = async (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const allowed = ["open", "in_progress", "closed"];
  if (!allowed.includes(status)) {
    return res.status(400).json({
      message: `status inválido. Use: ${allowed.join(", ")}`
    });
  }

  const tickets = await readTickets();
  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) return res.status(404).json({ message: "Ticket não encontrado" });

  ticket.status = status;
  ticket.updatedAt = new Date().toISOString();

  await writeTickets(tickets);
  res.json(ticket);
};

exports.deleteTicket = async (req, res) => {
  const id = Number(req.params.id);

  const tickets = await readTickets();
  const exists = tickets.some((t) => t.id === id);

  if (!exists) return res.status(404).json({ message: "Ticket não encontrado" });

  const filtered = tickets.filter((t) => t.id !== id);
  await writeTickets(filtered);

  res.status(204).send();
};
