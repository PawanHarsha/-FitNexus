import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const initializeChat = (): Chat => {
  const ai = getAIClient();
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are NexusCoach, an elite AI fitness assistant for the FitNexus platform. 
      Your goal is to help users with:
      1. Selecting the right gym equipment from our marketplace.
      2. Creating workout plans (Home or Gym).
      3. Advising on nutrition and supplements.
      4. Explaining exercises.
      
      Keep answers concise, motivating, and action-oriented. Use emojis occasionally. 
      If the user asks about specific products, recommend general categories available in a typical fitness store unless they ask for something specific found in our mock database.
      
      FitNexus has 3 main areas: Marketplace, Booking (Pay here gym everywhere), and Home Gym setup. You can guide them to these sections.`,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  try {
    const response: GenerateContentResponse = await chatSession!.sendMessage({ message });
    return response.text || "I'm having trouble connecting to the fitness mainframe. Try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error processing your request. Please check your connection.";
  }
};