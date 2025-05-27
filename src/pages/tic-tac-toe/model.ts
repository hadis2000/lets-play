export type symbolType = "X" | "O";

export type gameTurnType = {
  square: { row: number; col: number };
  player: symbolType;
};

export type PlayersType = {
  X: string;
  O: string;
};
