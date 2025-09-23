// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useAutoScroll } from "./hooks/useAutoScroll";
// import MessageBubble from "./MessageBubble";
// import TypingIndicator from "./TypingIndicator";
// import QuickSuggestions from "./QuickSuggestions";

// const uid = () => Math.random().toString(36).slice(2);

// export default function ChatWindow({ onClose }: { onClose: () => void }) {
//   const [messages, setMessages] = useState<ChatMessage[]>([
//     { id: uid(), role: "bot", text: "👋 Hi! I’m your advisor. How can I help you?", createdAt: Date.now() },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const viewportRef = useRef<HTMLDivElement>(null);

//   useAutoScroll(messages, viewportRef);

//   const sendMessage = async (text: string) => {
//     if (!text.trim()) return;
//     const userMsg: ChatMessage = { id: uid(), role: "user", text: text.trim(), createdAt: Date.now() };
//     setMessages((m) => [...m, userMsg]);
//     setInput("");
//     setLoading(true);

//     setTimeout(() => {
//       const botMsg: ChatMessage = {
//         id: uid(),
//         role: "bot",
//         text: `You said: ${text}`,
//         createdAt: Date.now(),
//       };
//       setMessages((m) => [...m, botMsg]);
//       setLoading(false);
//     }, 800);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       className="fixed bottom-6 right-6 w-[90vw] max-w-[420px] z-50 bg-white rounded-xl shadow-2xl flex flex-col"
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-3 border-b">
//         <h3 className="font-semibold">Jadeer Advisor</h3>
//         <button onClick={onClose}>✕</button>
//       </div>

//       {/* Messages */}
//       <div ref={viewportRef} className="flex-1 overflow-y-auto p-3 space-y-2 custom-scroll">
//         {messages.map((m) => (
//           <MessageBubble key={m.id} msg={m} />
//         ))}
//         {loading && <TypingIndicator />}
//       </div>

//       <QuickSuggestions items={["3BR in Riyadh", "Ready to move", "Budget 1.2M"]} onPick={sendMessage} />

//       {/* Input */}
//       <div className="p-2 border-t flex gap-2">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
//           className="flex-1 border rounded-lg p-2 text-sm"
//           placeholder="Ask about units, location, price..."
//         />
//         <button onClick={() => sendMessage(input)} disabled={!input.trim()} className="bg-black text-white px-3 rounded-lg">
//           Send
//         </button>
//       </div>
//     </motion.div>
//   );
// }
