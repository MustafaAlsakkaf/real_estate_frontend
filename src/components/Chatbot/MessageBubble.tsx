import { Message } from "./types";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";

const MessageBubble = ({ msg }: { msg: Message }) => {
  const isUser = msg.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[70%] px-4 py-2 rounded-lg text-sm shadow-sm ${
          isUser
            ? "bg-gray-400 text-white rounded-bl-none"
            : "bg-white text-gray-400 rounded-br-none"
        }`}
      >
        {msg.text}

        {msg.properties && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }}
            className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {msg.properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MessageBubble;
