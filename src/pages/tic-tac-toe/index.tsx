import { Introduction, PageLayout } from "../../component";
import GameBoard from "./game-board";
import Players from "./players";
import { useTicTacToe } from "./hook";
import GameOver from "./game-over";
import { useState } from "react";
import type { PlayersType, symbolType } from "./model";

const TicTacToe = () => {
  const [players, setPlayers] = useState<PlayersType>({
    X: "player 1",
    O: "player 2",
  });

  const {
    activePlayer,
    onSelectSquare,
    winner,
    gameBoard,
    hasDraw,
    handleRestart,
  } = useTicTacToe();

  const handlePlayerNameChange = (symbol: symbolType, newName: string) => {
    setPlayers((prv) => {
      return { ...prv, [symbol]: newName };
    });
  };

  return (
    <PageLayout>
      <Introduction>Tic Tac Toe</Introduction>
      <div
        style={{ width: "38rem" }}
        className=" p-5 mx-auto bg-white relative animate-then-show rounded-md max-h-[94vh] overflow-y-auto flex flex-col gap-5 "
      >
        <Players
          activePlayer={activePlayer}
          onChangeName={handlePlayerNameChange}
          players={players}
        />
        {(winner || hasDraw) && (
          <GameOver
            winnerName={players[winner ?? "X"]}
            onReset={handleRestart}
          />
        )}
        <GameBoard
          onSelectSquare={onSelectSquare}
          activePlayer={activePlayer}
          board={gameBoard}
        />
      </div>
    </PageLayout>
  );
};

export default TicTacToe;
