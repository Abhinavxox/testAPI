const { boolean } = require("webidl-conversions");
const commandService = require("../services/commandService");
const logger = require("../utils/logger");
const { type } = require("os");

//To store a command
exports.storeCommand = async (req, res, next) => {
  try {
    const { command } = req.body;
    res.setHeader("Content-Type", "text/plain");
    if (!command) {
      res.write("Please provide the command to save!\n");
      res.write(
        `Hint : Use the command key to store the command. \ncurl -X POST http://localhost:8080/api/v1/commands -d "command=ls -l"\n`
      );
    } else {
      logger.info(`Received store command request: ${command}`);
      const result = await commandService.storeCommand(command);
      res.write(`Command saved succesfully: ${result.command}\n`);
    }
    res.end();
  } catch (error) {
    logger.error(`Store command failed: ${error.message}`);
    next(error);
  }
};

// Handle searching commands
exports.searchCommands = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    let { details } = req.query || "false";
    details = details === "true";
    res.setHeader("Content-Type", "text/plain");
    if (!keyword) {
      res.write("Please provide the keyword to search!\n");
      res.write(
        `Hint : Use the keyword query parameter to search the command. \ncurl -X GET http://localhost:8080/api/v1/commands?keyword=ls\n`
      );
    } else if (details) {
      logger.info(
        `Received search command request with keyword: ${keyword} and details: ${details}`
      );
      let results = await commandService.searchCommandsWithDetails(keyword);
      results = results.map(
        (result) =>
          `    {\n        command: '${
            result.command
          }',\n        createdAt: ${new Date(result.createdAt)} \n    }`
      );
      res.write(`[\n${results.join(",\n")}\n]\n`);
    } else {
      logger.info(`Received search command request with keyword: ${keyword}`);
      let results = await commandService.searchCommands(keyword);

      results.forEach((result) => {
        res.write(`${result}\n`);
      });
    }
    res.end();
  } catch (error) {
    logger.error(`Search command failed: ${error.message}`);
    next(error);
  }
};
