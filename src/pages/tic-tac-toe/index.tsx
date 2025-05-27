import { Introduction, PageLayout } from "../../component";
import GameBoard from "./game-board";
import Players from "./players";
import { useTicTacToe } from "./hook";
import GameOver from "./game-over";

const TicTacToe = () => {
  const {
    activePlayer,
    onSelectSquare,
    winner,
    gameBoard,
    hasDraw,
    handleRestart,
  } = useTicTacToe();
  return (
    <PageLayout>
      <Introduction>Tic Tac Toe</Introduction>
      <div
        style={{ width: "38rem" }}
        className=" p-5 mx-auto bg-white relative animate-then-show rounded-md max-h-[94vh] overflow-y-auto flex flex-col gap-5 "
      >
        <Players activePlayer={activePlayer} />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onReset={handleRestart} />
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
