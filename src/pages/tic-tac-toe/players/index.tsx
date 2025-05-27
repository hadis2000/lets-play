import type { PlayersType, symbolType } from "../model";
import Player from "./player";

type playersType = {
  activePlayer: symbolType;
  onChangeName: (symbol: symbolType, newName: string) => void;
  players: PlayersType;
};

const Players = ({ activePlayer, onChangeName, players }: playersType) => {
  return (
    <ol className="flex flex-col sm:flex-row justify-around gap-5">
      {Object.entries(players).map(([key, value]) => (
        <Player
          onChangeName={onChangeName}
          isActive={activePlayer === key}
          initialName={value}
          symbol={key as symbolType}
        />
      ))}
    </ol>
  );
};

export default Players;
