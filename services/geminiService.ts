
import { GoogleGenAI, Type } from "@google/genai";

export const getGeminiResponse = async (prompt: string, systemInstruction: string = "") => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    // Fixed: Google Maps grounding tool is only available for Gemini 2.5 series models.
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      systemInstruction: systemInstruction || `You are JethroAI Master Architect (Raymund De Vera Ico). 
      You manage the AIJETH OS ecosystem. System state: HEALTHYNEURALS ACTIVE.
      Protocol: Volta WebSocket Auto. Run.
      Identity: JethroAi E-Services | BlinkRenderer.
      Contact: raymundico85@gmail.com | jethroaiservices@gmail.com.
      Developer Profile: https://g.dev/jethroaiservices.
      Focus on RA 8293 compliance and Gerrit Chromium Family integrity.`,
      temperature: 0.7,
      topP: 0.95,
      thinkingConfig: { thinkingBudget: 4000 },
      tools: [{ googleSearch: {} }, { googleMaps: {} }]
    },
  });

  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  const links = groundingChunks
    .map(chunk => {
      if (chunk.web) return { title: chunk.web.title || 'Search Result', uri: chunk.web.uri || '' };
      if (chunk.maps) return { title: chunk.maps.title || 'Location Found', uri: chunk.maps.uri || '' };
      return null;
    })
    .filter((item): item is { title: string; uri: string } => item !== null);

  return {
    text: response.text,
    links
  };
};

export const triggerAutoRun = async (serviceName: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Initiate Volta WebSocket Auto. Run for service: ${serviceName}. Verify Healthyneurals state.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          status: { type: Type.STRING },
          websocketEndpoint: { type: Type.STRING },
          neuralCheck: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text || "{}");
};

export const performAutoRepair = async (context: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Analyze system for Healthyneurals optimization: ${context}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          repairPlan: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                label: { type: Type.STRING },
                description: { type: Type.STRING }
              }
            }
          },
          estimatedVelocity: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text || "{}");
};

export const generateDeploymentManifest = async (serviceName: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Synthesize Volta WebSocket Cloud Run manifest for: ${serviceName}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          serviceName: { type: Type.STRING },
          image: { type: Type.STRING },
          cpu: { type: Type.NUMBER },
          memory: { type: Type.STRING },
          env: { 
            type: Type.OBJECT,
            properties: {
                "GERRIT_MASTER_KEY": { type: Type.STRING },
                "BLINK_V8_RUNTIME": { type: Type.STRING },
                "WEBSOCKET_MODE": { type: Type.STRING }
            }
          }
        }
      }
    }
  });
  return JSON.parse(response.text || "{}");
};

export const automateMerge = async (sourceCode: string, targetCode: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Merge code with Volta high-velocity protocol:
    
    SOURCE:
    \`\`\`
    ${sourceCode}
    \`\`\`
    
    TARGET:
    \`\`\`
    ${targetCode}
    \`\`\``,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          mergedCode: { type: Type.STRING },
          changes: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          performanceImpact: { type: Type.STRING }
        },
        required: ["mergedCode", "changes"]
      }
    }
  });
  
  return JSON.parse(response.text || "{}");
};
