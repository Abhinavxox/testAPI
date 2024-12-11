const express = require("express");
const router = express.Router();
const {
  storeCommand,
  searchCommands,
} = require("../controllers/commandController.js");

// POST /api/v1/commands - Store command
router.post("/commands", storeCommand);

// GET /api/v1/commands?keyword=&details= - Search commands
router.get("/commands", searchCommands);

module.exports = router;
