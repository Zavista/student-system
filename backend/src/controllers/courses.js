const connection = require("../config/db");

// GET
const getCourses = (req, res) => {
  const sql = "SELECT * FROM courses";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("Error getting courses:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(result);
  });
};

// POST
const addCourse = (req, res) => {
  const sql = "INSERT INTO courses (`course_name`) VALUES (?)";

  const values = [req.body.course_name];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error adding course:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Course has been successfully added.");
  });
};

// PUT
const updateCourse = (req, res) => {
  const sql = "UPDATE courses SET course_name = ? WHERE id = ?";

  const values = [req.body.course_name, req.params.id];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error udating course:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Course has been successfully updated.");
  });
};

// DELETE
const deleteCourse = (req, res) => {
  const sql = "DELETE FROM courses WHERE id = ?";

  const values = [req.params.id];

  connection.query(sql, values, (err) => {
    if (err) {
      console.log("Error deleting course:", err);
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json("Course has been successfully deleted.");
  });
};

module.exports = {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};
