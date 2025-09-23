import { useState, useRef, useEffect } from "react";
import { Message } from "./types";
import ChatSuggestions from "./ChatSuggestions";
import ChatInput from "./ChatInput";
import { getAIResponse } from "./ChatbotService";
import ChatMessages from "./ChatMessages";

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // 🔹 new
  const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const messageText = text ?? input;
    if (!messageText.trim()) return;

    const userMsg: Message = { id: Date.now(), role: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true); // show typing dots

    const aiMsg = await getAIResponse(messageText);

    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false); // hide typing dots
  };

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg w-[95%] max-w-4xl p-4 flex flex-col">
      <ChatMessages messages={messages} chatRef={chatRef} loading={loading} /> {/* pass loading */}
      <ChatSuggestions onPick={sendMessage} />
      <ChatInput input={input} setInput={setInput} onSend={() => sendMessage()} />
    </div>
  );
};

export default ChatContainer;
