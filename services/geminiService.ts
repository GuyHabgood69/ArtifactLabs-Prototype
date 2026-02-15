
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTechnicalStrategy = async (prompt: string): Promise<StrategyResponse> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Analyze this project idea and provide a high-level CTO strategy: ${prompt}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          architecture: { type: Type.STRING, description: 'Recommended architectural pattern.' },
          techStack: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'List of key technologies.'
          },
          roadmap: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'Top 3 engineering milestones.'
          },
          riskFactor: { type: Type.STRING, description: 'The biggest technical risk to mitigate.' }
        },
        required: ["architecture", "techStack", "roadmap", "riskFactor"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
