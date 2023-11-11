import { useState } from "react";

import { games } from "@/constants/games.json";

export function App() {
  const [selectedGame, setSelectedGame] =
    useState<string>("Seleciona ai cuzão");

  function drawGame() {
    const gamesLength: number = games.length;

    const randomGame = Math.floor(Math.random() * gamesLength);

    setSelectedGame(games[randomGame]);
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-base-300">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{selectedGame}</h2>
          <p>Melhor de 3 no máximo em, sem roubar!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={drawGame}>
              Sortear jogo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
