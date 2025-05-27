import { useState, type ChangeEvent } from "react";
import type { symbolType } from "../../model";

type PlayerType = {
  initialName: string;
  symbol?: symbolType;
  isActive: boolean;
  onChangeName: (symbol: symbolType, newName: string) => void;
};

const Player = ({
  initialName,
  symbol,
  isActive,
  onChangeName,
}: PlayerType) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = () => {
    setIsEditing((c) => !c);

    if (isEditing) onChangeName(symbol ?? "X", playerName ?? initialName);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  return (
    <li
      className={` h-14 bg-gray-200 px-5 w-full flex justify-between rounded gap-5 font-bold border-2  
        ${
          isActive ? " border-cyan-400 shadow-pulse " : " border-transparent "
        } `}
    >
      <span className="flex justify-between items-center gap-3 w-full text-cyan-800 uppercase">
        {isEditing ? (
          <input
            className="h-8 bg-gray-300 w-full px-2 uppercase"
            type="text"
            required
            value={playerName}
            // defaultValue={playerName}
            onChange={onChange}
          />
        ) : (
          <span className="ps-2">{playerName}</span>
        )}
        <span>{symbol}</span>
      </span>
      <button
        onClick={onEdit}
        className="text-cyan-400 cursor-pointer hover:scale-110 transition-all"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
