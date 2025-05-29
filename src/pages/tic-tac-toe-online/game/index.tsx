// src/pages/Game.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../../store/useGameStore";
import socket from "../../../socket";
import Board from "../components/Board";

export default function Game() {
  const playerName = useGameStore((s) => s.playerName);
  const navigate = useNavigate();

  const [opponent, setOpponent] = useState("");
  const [playerSymbol, setPlayerSymbol] = useState<"X" | "O" | null>(null);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<null | "X" | "O" | "draw">(null);

  useEffect(() => {
    if (!playerName) {
      navigate("/");
      return;
    }

    if (!socket.connected) {
      socket.connect(); // فقط در صورت قطع بودن، وصل کن
    }

    socket.emit("join", { name: playerName });

    const handleStartGame = ({ symbol, opponentName }: any) => {
      setPlayerSymbol(symbol);
      setOpponent(opponentName);
    };

    const handleUpdateBoard = ({ board, turn }: any) => {
      setBoard(board);
      setTurn(turn);
    };

    const handleGameOver = (winner: "X" | "O" | "draw") => {
      setWinner(winner);
    };

    socket.on("startGame", handleStartGame);
    socket.on("updateBoard", handleUpdateBoard);
    socket.on("gameOver", handleGameOver);

    return () => {
      socket.off("startGame", handleStartGame);
      socket.off("updateBoard", handleUpdateBoard);
      socket.off("gameOver", handleGameOver);
    };
  }, [playerName]);

  const handleCellClick = (index: number) => {
    if (board[index] || winner || turn !== playerSymbol) return;
    socket.emit("play", { index });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {!playerSymbol ? (
        <div>منتظر اتصال به بازی...</div>
      ) : (
        <>
          <h2 className="text-xl font-bold">
            بازیکن: {playerName} ({playerSymbol})
          </h2>
          <h3 className="text-md">حریف: {opponent}</h3>
          <Board board={board} onClick={handleCellClick} />
          <div className="text-lg font-semibold">
            {winner
              ? winner === "draw"
                ? "مساوی شد!"
                : `برنده: ${winner}`
              : turn === playerSymbol
              ? "نوبت شماست"
              : "منتظر حریف..."}
          </div>
        </>
      )}
    </div>
  );
}
