const express = require("express");
const {
  getResults,
  addResult,
  updateResult,
  deleteResult,
} = require("../controllers/results");

const router = express.Router();

// Results Routes

router.get("/", getResults);
router.post("/", addResult);
router.put("/:id", updateResult);
router.delete("/:id", deleteResult);

module.exports = router;
