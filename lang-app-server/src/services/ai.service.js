

import client from "../config/ai.js";

import { expressionSystemPrompt } from "../prompts/expression.prompt.js";

export const analyzeExpressionWithAI = async ({
    originalText,
    targetLanguage,
    explainLanguage,
    inputType = "text",
  }) => {
    const response = await client.responses.create({
        model: "gpt-5.5",
        input: `
${expressionSystemPrompt}

Expression: "${originalText}"

Target Language: "${targetLanguage}"

Explain Language: "${explainLanguage}"

Input Type: "${inputType}"
`,
    });
    console.log(response.output_text);
    return response.output_text;
  };


// analyzeExpressionWithAI({
//   originalText: "I won't be a sucker.",
//   targetLanguage: "English",
//   explainLanguage: "Korean",
// });



//=============other api test=============
//communicating with the AI model

//deepseek

// Please install OpenAI SDK first: `npm install openai`
// import openai from "../config/ai.js";
/*
import ai from "../config/ai.js";
import { expressionSystemPrompt } from "../prompts/expression.prompt.js";

export const analyzeExpressionWithAI = async ({
  originalText,
  targetLanguage,
  explainLanguage,
  inputType = "text",
}) => {
  const prompt = `
${expressionSystemPrompt}

Analyze the following expression:

Expression: "${originalText}"

Target Language: "${targetLanguage}"

Explain Language: "${explainLanguage}"

Input Type: "${inputType}"
`;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  const text = response.text();
  console.log(text);
  return text;
};
// independent test use purpose
*/
