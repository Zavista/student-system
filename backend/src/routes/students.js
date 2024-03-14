const express = require("express");
const router = express.Router();
const controller = require("../controllers/students");

// Students Routes

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);
