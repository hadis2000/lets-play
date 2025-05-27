import type { gameTurnType, PlayersType, symbolType } from "./model";
import { initialGameBoard, WINNING_COMBINATION } from "./utils";

export const deriveActivePlayer = (gameTurns: gameTurnType[]) => {
  let currentPlayer: symbolType = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

export const derivWinner = (
  gameBoard: (null | symbolType)[][],
  players: PlayersType
) => {
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
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
};

export const derivGameBoard = (gameTurns: gameTurnType[]) => {
  const gameBoard: (null | symbolType)[][] = [
    ...initialGameBoard.map((arr) => [...arr]),
  ];

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { col, row } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};
