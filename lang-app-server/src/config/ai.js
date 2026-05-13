import OpenAI from "openai";
import dotenv from 'dotenv'


//open ai
dotenv.config();
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


export default client;

//gemini
// dotenv.config();
// import { GoogleGenAI } from "@google/genai";

// // The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({  apiKey: process.env.GEMINI_API_KEY,
// });

// export default ai;


