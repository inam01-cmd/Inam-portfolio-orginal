import { GoogleGenAI } from "@google/genai";
import { Project, Experience, Skill } from "../types";

// We construct a context string based on the portfolio data to feed the AI
export const createSystemInstruction = (
  name: string,
  bio: string,
  skills: Skill[],
  projects: Project[],
  experience: Experience[]
): string => {
  return `
    You are an AI Assistant for ${name}'s personal portfolio website.
    Your goal is to answer visitor questions about ${name} based strictly on the provided context.
    
    About ${name}: ${bio}
    
    Skills: ${skills.map(s => s.name).join(', ')}.
    
    Work Experience:
    ${experience.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}
    
    Projects:
    ${projects.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}
    
    Tone: Professional, friendly, enthusiastic, and concise.
    If asked about something not in the context, politely mention you only know about ${name}'s professional background.
    Do not provide personal contact info unless specifically asked for the email (which is contact@example.com).
  `;
};

export const sendMessageToGemini = async (
  message: string,
  systemInstruction: string,
  history: { role: 'user' | 'model'; text: string }[] = []
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Map internal history format to Gemini history format if needed, 
    // but for simple single-turn or short context, we can just use generateContent with the system instruction.
    // For better chat, we'll use a chat session.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};