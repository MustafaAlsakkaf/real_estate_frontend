interface Props {
  input: string;
  setInput: (val: string) => void;
  onSend: () => void;
}

const ChatInput = ({ input, setInput, onSend }: Props) => (
  <div className="mt-4 flex items-center bg-white rounded-full border px-2 py-1 shadow-sm">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSend()}
      placeholder="Ask about properties..."
      className="flex-1 bg-transparent outline-none px-2 text-lg text-gray-800"
    />
    <button
      onClick={onSend}
      className="bg-gray-400 text-white rounded-full py-3 px-4 hover:bg-gray-400 transition"
    >
      ➤
    </button>
  </div>
);

export default ChatInput;
