const express = require("express");
const router = express.Router();
const { generateAnswer } = require("../controllers/aiController");

router.post("/chat", generateAnswer);

module.exports = router;