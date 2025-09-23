const TypingIndicator = () => {
  return (
    <div className="flex justify-end">
      <div className="bg-gray-100 text-gray-600 px-3 py-2 rounded-lg rounded-br-none text-sm flex gap-1">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default TypingIndicator;
