import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const genAI = new GoogleGenerativeAI('AIzaSyC1nf9W0ujJbfb7gsqIC9FHAfZY7FKIULY');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default async function run() {
    const prompt = "Write a story about a AI and magic"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text
  }
  
  