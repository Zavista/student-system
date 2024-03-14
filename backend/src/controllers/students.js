const connection = require("../config/db");

// GET
const getStudents = (req, res) => {
  const sql = "SELECT * FROM students";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("Error getting students:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(result);
  });
};

// POST
const addStudent = (req, res) => {
  const sql =
    "INSERT INTO students (`first_name`, `family_name`, `date_of_birth`) VALUES (?, ?, ?)";

  const values = [
    req.body.first_name,
    req.body.family_name,
    req.body.date_of_birth,
  ];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error adding student:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Student has been successfully added.");
  });
};

// PUT
const updateStudent = (req, res) => {
  const sql =
    "UPDATE students SET first_name = ?, family_name = ?, date_of_birth = ? where id = ?";

  const values = [
    req.body.first_name,
    req.body.family_name,
    req.body.date_of_birth,
    req.params.id,
  ];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error udating student:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Student has been successfully updated.");
  });
};

// DELETE
const deleteStudent = (req, res) => {
  const sql = "DELETE FROM students WHERE id = ?";

  const values = [req.params.id];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error deleting student:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Student has been successfully deleted.");
  });
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};
