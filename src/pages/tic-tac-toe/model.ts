export type playerType = "X" | "O";

export type gameTurnType = {
  square: { row: number; col: number };
  player: playerType;
};
