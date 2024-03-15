const connection = require("../config/db");

// GET
const getResults = (req, res) => {
  const sql = `
  SELECT 
    courses.course_name,
    students.first_name,
    students.family_name,
    results.score,
    results.student_id,
    results.course_id,
    results.id
  FROM results
  INNER JOIN courses ON courses.id = results.course_id
  INNER JOIN students ON students.id = results.student_id;
`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.log("Error getting results:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(result);
  });
};

// POST
const addResult = (req, res) => {
  const sql =
    "INSERT INTO results (`student_id`, `course_id`, `score`) VALUES (?, ?, ?)";

  const values = [req.body.student_id, req.body.course_id, req.body.score];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error adding result:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Result has been successfully added.");
  });
};

// PUT
const updateResult = (req, res) => {
  const sql =
    "UPDATE results SET student_id = ?, course_id = ?, score = ? WHERE id = ?";

  const values = [
    req.body.student_id,
    req.body.course_id,
    req.body.score,
    req.params.id,
  ];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error udating result:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Result  has been successfully updated.");
  });
};

// DELETE
const deleteResult = (req, res) => {
  const sql = "DELETE FROM results WHERE id = ?";

  const values = [req.params.id];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error deleting result:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Result has been successfully deleted.");
  });
};

module.exports = {
  getResults,
  addResult,
  updateResult,
  deleteResult,
};
