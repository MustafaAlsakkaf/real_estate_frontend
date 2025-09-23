interface Props {
  onPick: (text: string) => void;
}

const ChatSuggestions = ({ onPick }: Props) => {
  const suggestions = [
    "3BR in Al Malqa under 1.2M",
    "4BR Villa in Hittin",
    "Ready units in 2025",
    "properties in Jeddah",
  ];
  return (
    <div className="flex flex-wrap text-center justify-center gap-2 mt-3">
      {suggestions.map((s, i) => (
        <button
          key={i}
          onClick={() => onPick(s)}
          className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border hover:bg-gray-100"
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
