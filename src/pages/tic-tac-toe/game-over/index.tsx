import type { playerType } from "../model";

type GameOverType = {
  winner?: playerType;
  onReset: () => void;
};

const GameOver = ({ winner, onReset }: GameOverType) => {
  return (
    <div
      className="absolute top-[50%] left-[50%] -translate-[50%] w-full h-full bg-white/85 
    flex flex-col items-center justify-center gap-10 text-center
    "
    >
      <h2 className="text-7xl font-semibold text-cyan-400 ">Game Over!</h2>
      {winner ? (
        <p className="text-4xl text-cyan-800 font-bold">{winner} won!</p>
      ) : (
        <p className="text-4xl text-cyan-800 font-bold">It's a draw!</p>
      )}
      <p>
        <button
          onClick={onReset}
          className="p-2 text-cyan-400 shadow-pulse border-2 border-cyan-400 rounded-lg text-xl hover:scale-x-110 transition-all cursor-pointer"
        >
          Rematch!
        </button>
      </p>
    </div>
  );
};

export default GameOver;
