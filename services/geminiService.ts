import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Du bist der virtuelle Assistent für KDG (KDG Mediatech / KDG Optical).
KDG ist ein hochtechnologisiertes Unternehmen im Lechtal, Österreich.
Deine Tone-of-Voice ist professionell, präzise (wie ein Diamant) und freundlich.

Wichtige Fakten über KDG:
- Standort: Elbigenalp, Lechtal (Tirol).
- Fokus: Hochpräzisions-Spritzguss, Optische Komponenten (Linsen für Lichtinstallationen, Automotive), Logistik & Fulfillment.
- Werte: Präzision, Nachhaltigkeit (Green Logistics), Innovation.
- Atmosphäre: "Klarheit von Diamanten", "Natur des Lechtals".
- KDG produziert optische Datenträger (Heritage) und hat sich zu einem High-Tech Engineering Partner entwickelt.

Antworte kurz und prägnant auf Deutsch. Wenn gefragt wird, was die Kreise auf der Website bedeuten: Sie symbolisieren Linsen, Lichtbrechung und den Fokus auf das Detail.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Entschuldigung, ich bin derzeit nicht konfiguriert (API Key fehlt).";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We utilize a simple generateContent here for a stateless feel or basic chat, 
    // but typically we would use chat.sendMessage for history. 
    // To simplify the demo, we recreate the chat context each time or just answer the prompt.
    // For a better experience, let's use the chat model with history.

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Ich konnte das nicht verarbeiten.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es gab ein technisches Problem bei der Verarbeitung Ihrer Anfrage.";
  }
};