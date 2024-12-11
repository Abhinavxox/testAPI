const mongoose = require("mongoose");

const commandSchema = new mongoose.Schema({
  command: { type: String, required: true, minlength: 1, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Command", commandSchema);
