const express = require("express");
const router = express.Router();
const controller = require("../controllers/students");

// Students Routes

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
