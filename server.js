const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Graceful shutdown
const shutdown = async () => {
  console.log("\nShutting down gracefully...");
  server.close(() => {
    console.log("HTTP server closed.");
  });

  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }

  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
