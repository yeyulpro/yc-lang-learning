import { analyzeExpressionWithAI } from "../services/ai.service.js";
import Expression from "../models/expressionSchema.js";

const aiChat = async (req, res) => {
  try {
    const { originalText, targetLanguage, explainLanguage, inputType } = req.body;
    if (!originalText || !targetLanguage || !explainLanguage) {
      return res.status(400).json({
        success: false,
        message:
          "originalText, targetLanguage, and explainLanguage are required",
      });
    }
    const analysis = await analyzeExpressionWithAI({
      originalText,
      targetLanguage,
      explainLanguage,
      inputType,
    });
    if (!analysis) {
      return res.status(400).json({
        success: false,
        message: "Analysis failed",
      });
    }
    //save into the database (to add user id later )
     
    const aiResponse=await Expression.create({ 
      originalText,
      targetLanguage,
      explainLanguage,
      inputType, ...analysis,
     
      savedDate: new Date().toISOString().split("T")[0],});
    if(!aiResponse) {
      return res.status(400).json({
        success: false,
        message: "Failed to retrieve expression result from the DB",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Analysis successful",
      data: aiResponse,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default aiChat;
