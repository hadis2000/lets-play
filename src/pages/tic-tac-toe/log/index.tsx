import type { gameTurnType } from "..";

type logType = {
  turns: gameTurnType[];
};

const Log = ({ turns }: logType) => {
  return (
    <ol className="text-white">
      {turns.map((turn, turnIndex) => (
        <li key={turnIndex}>
          {turn.player} selected {turn.square.col},{turn.square.row}
        </li>
      ))}
    </ol>
  );
};

export default Log;
