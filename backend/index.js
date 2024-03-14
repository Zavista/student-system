const express = require("express");
const cors = require("cors");
const connection = require("./config/db");

const app = express();

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL:", err);
  }
  console.log("Connected to MySQL");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
