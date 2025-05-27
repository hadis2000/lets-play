// src/pages/Home.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../../store/useGameStore";

export default function Home() {
  const [name, setName] = useState("");
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const navigate = useNavigate();

  const handleStart = () => {
    if (!name.trim()) return;
    setPlayerName(name);
    navigate("/game");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Tic-Tac-Toe Online</h1>
      <input
        type="text"
        placeholder="نام خود را وارد کنید"
        className="p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleStart}
      >
        شروع بازی
      </button>
    </div>
  );
}
