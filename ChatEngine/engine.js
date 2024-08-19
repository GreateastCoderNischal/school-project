import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const genAI = new GoogleGenerativeAI('AIzaSyC1nf9W0ujJbfb7gsqIC9FHAfZY7FKIULY');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function chatEngine(prompt) {

  const result = await model.generateContent("Make your response minimum and short. This is the prompt: \n"+prompt);
  const response = await result.response;
  const text = response.text();
  let replacedText=text.replace(":",":/n").replace("* **","/n");
  return replacedText
}

