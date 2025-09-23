interface Props {
  items: string[];
  onPick: (text: string) => void;
}

export default function QuickSuggestions({ items, onPick }: Props) {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {items.map((s) => (
        <button
          key={s}
          onClick={() => onPick(s)}
          className="rounded-full border px-3 py-1 text-xs hover:bg-neutral-100"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
