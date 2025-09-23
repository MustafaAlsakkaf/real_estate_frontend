import { RefObject } from "react";
import { Message } from "./types";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface Props {
  messages: Message[];
  chatRef: RefObject<HTMLDivElement>;
  loading?: boolean;
}

const ChatMessages = ({ messages, chatRef, loading }: Props) => (
  <div
    ref={chatRef}
    className="overflow-y-auto space-y-3 pr-2 custom-scroll h-auto min-h-[50px] max-h-[500px] transition-all"
  >
    {messages.map((msg) => (
      <MessageBubble key={msg.id} msg={msg} />
    ))}
    {loading && <TypingIndicator />}
  </div>
);

export default ChatMessages;
