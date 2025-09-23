import type { Message, Property } from "./types";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function getAIResponse(userText: string, sessionId = "default"): Promise<Message> {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText, sessionId }),
  });

  if (!res.ok) throw new Error("API error: " + res.status);

  const data = await res.json();

  return {
    id: Date.now(),
    role: "ai",
    text: data.reply,
    properties: (data.properties ?? []).map(
      (u: any): Property => ({
        id: u.id,
        title: u.title,
        image: "/riyadh20.png", // 🔹 placeholder, later use u.image if available
        price: u.price ? `${u.price.toLocaleString()} SAR` : "N/A",
        location: `${u.city || ""}${u.district ? ", " + u.district : ""}`,
        bedrooms: u.bedrooms || 0,
        bathrooms: u.bathrooms || 0,
      })
    ),
  };
}
