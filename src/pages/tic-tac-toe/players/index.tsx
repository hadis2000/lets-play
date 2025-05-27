import type { playerType } from "../model";
import Player from "./player";

type playersType = {
  activePlayer: playerType;
};

const Players = ({ activePlayer }: playersType) => {
  return (
    <ol className="flex flex-col sm:flex-row justify-around gap-5">
      <Player
        isActive={activePlayer === "X"}
        initialName="player1"
        symbol="X"
      />
      <Player
        isActive={activePlayer === "O"}
        initialName="player2"
        symbol="O"
      />
    </ol>
  );
};

export default Players;
