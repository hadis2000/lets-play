import { Introduction, PageLayout } from "../../component";
import GameBoard from "./game-board";
import Players from "./players";
import { deriveActivePlayer, derivGameBoard, derivWinner } from "./hook";
import GameOver from "./game-over";
import { useState } from "react";
import type { gameTurnType, PlayersType, symbolType } from "./model";

const TicTacToe = () => {
  const [gameTurns, setGameTurns] = useState<gameTurnType[]>([]);
  const [players, setPlayers] = useState<PlayersType>({
    X: "player 1",
    O: "player 2",
  });

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = derivGameBoard(gameTurns);
  const winner = derivWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const onSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prvTurns) => {
      const currentPlayer = deriveActivePlayer(prvTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prvTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

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
          <GameOver winnerName={winner} onReset={handleRestart} />
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
