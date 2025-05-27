import { useState } from "react";
import type { gameTurnType, playerType } from "./model";
import { initialGameBoard, WINNING_COMBINATION } from "./utils";

export const deriveActivePlayer = (gameTurns: gameTurnType[]) => {
  let currentPlayer: playerType = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

export const useTicTacToe = () => {
  const [gameTurns, setGameTurns] = useState<gameTurnType[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard: (null | playerType)[][] = [
    ...initialGameBoard.map((arr) => [...arr]),
  ];

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { col, row } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATION) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

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

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleRestart = () => {
    setGameTurns([]);
  };

  return {
    onSelectSquare,
    winner,
    activePlayer,
    gameBoard,
    hasDraw,
    handleRestart,
  };
};
