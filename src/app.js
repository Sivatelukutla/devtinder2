const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("Database is successfully connected");

    // Start server
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Database is not connected:", err.message);
  });
