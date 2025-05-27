import { CustomToast } from "../../../component";
import type { playerType } from "../model";

type GameBoardType = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  activePlayer: playerType;
  board: (null | playerType)[][];
};

const GameBoard = ({ onSelectSquare, board, activePlayer }: GameBoardType) => {
  return (
    <ol className="flex flex-col gap-5 w-fit mx-auto">
      {board?.map((row, rowIndex) => (
        <li key={rowIndex} className="w-full">
          <ol className="flex justify-between gap-5">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className=" h-24 sm:h-28">
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => {
                    onSelectSquare(rowIndex, colIndex);
                    CustomToast(
                      `${activePlayer} selected ${rowIndex},${colIndex}`
                    );
                  }}
                  className="bg-gray-500 sm:w-28 sm:h-28 w-24 h-24 rounded text-5xl font-semibold text-shadow-neon focus:"
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
