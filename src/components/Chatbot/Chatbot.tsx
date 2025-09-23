// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import ChatWindow from "./ChatWindow";

// export default function Chatbot() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed bottom-6 right-6 bg-white shadow-xl p-3 rounded-full z-40"
//       >
//         <img src="/advisor-avatar.png" alt="Chatbot" className="w-12 h-12 rounded-full" />
//       </button>

//       <AnimatePresence>{open && <ChatWindow onClose={() => setOpen(false)} />}</AnimatePresence>
//     </>
//   );
// }
