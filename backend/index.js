const express = require("express");
const cors = require("cors");
const connection = require("./src/config/db");
const studentsRouter = require("./src/routes/students");
const coursesRouter = require("./src/routes/courses");
const resultsRouter = require("./src/routes/results");

const app = express();

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL:", err);
  }
  console.log("Connected to MySQL");
});

// Routes
app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);
app.use("/results", resultsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
