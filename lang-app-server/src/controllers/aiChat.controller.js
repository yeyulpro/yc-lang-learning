import { analyzeExpressionWithAI } from '../services/ai.service.js';

const aiChat = async (req, res) => {
    try {
        
        const { originalText ,targetLanguage,explainLanguage,inputType} = req.body;
        if (!originalText || !targetLanguage || !explainLanguage) {
            return res.status(400).json({
              success: false,
              message: "originalText, targetLanguage, and explainLanguage are required",
            })}
            const analysis = await analyzeExpressionWithAI({originalText,targetLanguage,explainLanguage,inputType})
            if (!analysis) {
                return res.status(400).json({
                    success: false,
                    message: "Analysis failed",
                })
            }
            return res.status(200).json({
                success: true,
                message: "Analysis successful",
                data: analysis,
            })
         } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default aiChat;