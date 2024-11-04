import React from "react";
import { useNavigate } from "react-router-dom";

export const GameRules = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/4312899.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay */}
      
      <div className="relative flex flex-col items-center p-6 rounded-lg shadow-lg max-w-xl mx-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg z-10 my-9">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Tic-Tac-Toe Game Rules</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Introduction</h2>
          <p className="text-gray-700">
            Tic-Tac-Toe is a simple yet engaging game, also known as Noughts and Crosses. It’s typically played by two players who take turns marking spaces on a 3x3 grid. The objective is to align three of your symbols (X or O) in a row, column, or diagonal to win.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">How to Play</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Player 1 uses "X" and Player 2 (or Computer) uses "O".</li>
            <li>Players take turns marking an empty cell in the 3x3 grid.</li>
            <li>The first player to place three marks in a horizontal, vertical, or diagonal row wins the game.</li>
            <li>If all cells are filled and neither player has three in a row, the game ends in a draw.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Winning Strategies</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Fork Strategy:</strong> Create an opportunity where you have two winning moves, making it impossible for your opponent to block both.</li>
            <li><strong>Center Control:</strong> Start by marking the center cell if you can, as it increases your chances of forming multiple lines.</li>
            <li><strong>Blocking:</strong> Pay attention to your opponent’s moves and block them if they are close to winning.</li>
            <li><strong>Corner Play:</strong> The corners are the most advantageous cells after the center, as they provide more opportunities for a row or column alignment.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Additional Tips</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Think Ahead:</strong> Try to plan your moves a few steps in advance to anticipate your opponent's moves.</li>
            <li><strong>Adapt Your Strategy:</strong> Don’t stick to a single strategy. Adapt based on your opponent's choices and tendencies.</li>
            <li><strong>Practice:</strong> The more you play, the better you’ll get at spotting winning patterns and strategies.</li>
          </ul>
        </section>

        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Enjoy the Game!</h2>
          <p className="text-gray-700">
            Tic-Tac-Toe is a great game to pass the time, sharpen your logic skills, and have fun with friends or family. Enjoy and may the best strategist win!
          </p>
        </section>

        <button
          onClick={handleStartGame}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameRules;
