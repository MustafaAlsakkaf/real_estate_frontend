interface Props {
  onPick: (text: string) => void;
}

const ChatSuggestions = ({ onPick }: Props) => {
  const suggestions = [
    "Apartment in Almalqa with 3 bedrooms",
    "Villa in Riyadh with a private pool",
    "Luxury penthouse in King Abdullah Financial District",
  ];
  return (
    <div className="flex flex-wrap text-center justify-center  gap-4 mt-0.5">
      {suggestions.map((s, i) => (
        <button
          key={i}
          onClick={() => onPick(s)}
          className="bg-gray-400 text-whate text-1sm px-1 py-1 rounded-full border hover:bg-gray-100"
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
