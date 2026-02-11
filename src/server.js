const express = require("express");
const cors = require("cors");

const ticketRoutes = require("./routes/tickets");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/tickets", ticketRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`HelpDesk API rodando na porta ${PORT}`);
});


