// src/components/Board.tsx
type BoardProps = {
  board: (string | null)[];
  onClick: (index: number) => void;
};

export default function Board({ board, onClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-1 w-[300px] h-[300px]">
      {board.map((cell, idx) => (
        <button
          key={idx}
          onClick={() => onClick(idx)}
          className="w-full h-full text-4xl font-bold border border-gray-400 flex items-center justify-center hover:bg-gray-100"
        >
          {cell}
        </button>
      ))}
    </div>
  );
}
