const generateAIResponse = require("../services/gemini");

exports.generateAnswer = async (req, res) => {
  try {
    const { category, question } = req.body;

    const answer = await generateAIResponse(category, question);

    res.json({
      success: true,
      answer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};