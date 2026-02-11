const express = require("express");
const router = express.Router();

const ticketController = require("../controllers/ticketController");

router.get("/", ticketController.getTickets);
router.get("/:id", ticketController.getTicketById);
router.post("/", ticketController.createTicket);
router.patch("/:id/status", ticketController.updateTicketStatus);
router.delete("/:id", ticketController.deleteTicket);

module.exports = router;
