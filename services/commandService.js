const Command = require("../models/Commands");
const logger = require("../utils/logger");

// Save a command
exports.storeCommand = async (command) => {
  if (!command || command.length < 2) {
    logger.error(
      "Failed to save command: Command must be at least 1 character long."
    );
    throw new Error("Command must be at least 1 character long.");
  }

  try {
    const newCommand = new Command({ command });
    const result = await newCommand.save();
    logger.info(`Command saved: ${command}`);
    return result;
  } catch (error) {
    logger.error(`Error saving command: ${error.message}`);
    throw error;
  }
};

// Search commands by keyword with details
exports.searchCommandsWithDetails = async (keyword) => {
  if (!keyword) {
    logger.error("Failed to search commands: Keyword is required.");
    throw new Error("Keyword is required.");
  }

  try {
    const results = await Command.find({
      command: { $regex: keyword, $options: "i" },
    });
    logger.info(
      `Search performed with keyword: ${keyword}, Results: ${results.length}`
    );
    return results;
  } catch (error) {
    logger.error(`Error searching commands: ${error.message}`);
    throw error;
  }
};

// Search commands by keyword
exports.searchCommands = async (keyword) => {
  if (!keyword) {
    logger.error("Failed to search commands: Keyword is required.");
    throw new Error("Keyword is required.");
  }

  try {
    const results = await Command.find({
      command: { $regex: keyword, $options: "i" },
    });
    const commands = results.map((result) => result.command);
    logger.info(
      `Search performed with keyword: ${keyword}, Results: ${results.length}`
    );
    return commands;
  } catch (error) {
    logger.error(`Error searching commands: ${error.message}`);
    throw error;
  }
};
