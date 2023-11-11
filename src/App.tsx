// #region Imports

import { useState } from "react";

import { Card } from "@/components/Card";

import { returnGame } from "@/utils/drawGame";

import { games } from "@/constants/games.json";

// #endregion

export function App() {
  const [selectedGame, setSelectedGame] =
    useState<string>("Seleciona ai cuzão");
  const [loading, setLoading] = useState<boolean>(false);

  function drawGame() {
    setLoading(true);

    const interval = setInterval(() => {
      setSelectedGame(games[returnGame()]);
      setLoading(false);
      clearInterval(interval);
    }, 1000);
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-base-300">
      <Card.Root>
        <Card.Body>
          <Card.Title>
            {loading ? (
              <span className="loading loading-infinity loading-md"></span>
            ) : (
              selectedGame
            )}
          </Card.Title>
          <p>
            Melhor de 3 no máximo! <strong>Sem roubar cuzão!</strong>
          </p>
          <Card.Actions>
            <button className="btn btn-primary" onClick={drawGame}>
              Sortear jogo
            </button>
          </Card.Actions>
        </Card.Body>
      </Card.Root>
    </main>
  );
}
