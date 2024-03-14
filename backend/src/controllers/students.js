const connection = require("../config/db");

// GET
const getStudents = (req, res) => {
  const sql = "SELECT * FROM students";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("Error getting students:", err);
      res.status(500).json({ message: err.message });
    }
    res.status(200).json(result);
  });
};

module.exports = {
  getStudents,
};
