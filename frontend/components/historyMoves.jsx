import React, { useContext } from "react";
import { GameContext } from "../../src/context/context";

export const HistoryMoves = ({ formData }) => {
  const { turns, Play, chosenSymbolUser1, user1, username1, username2 } =
    useContext(GameContext);
  console.log(chosenSymbolUser1);
  console.log(user1);

  return (
    <div
      className="p-5 bg-gray-50 bg-opacity-80 rounded-lg shadow-lg w-full"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(10px)",
        zIndex: 0,
      }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Turn History
      </h2>
      <div
        className="overflow-y-auto custom-scrollbar"
        style={{
          maxHeight: "406px", // Adjust this height based on how much scrollable area you need
          borderRadius: "10px",
        }}
      >
        <div className="space-y-3 w-full">
          {turns.map((turn, idx) => (
            <div
              key={idx}
              className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm w-full"
            >
              <p className="text-gray-800">
                <span className="font-bold text-gray-700">
                  {Play === "Computer" ? (
                    <span className="font-bold text-blue-700">
                      {formData.username.toUpperCase()}
                    </span>
                  ) : // <span className="font-bold text-blue-600">
                  //   {formData.username.toUpperCase()}
                  // </span>
                  null}
                </span>
                <span
                  className={`font-bold ${
                    turn.player === chosenSymbolUser1
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {turn.player === chosenSymbolUser1
                    ? username1.toUpperCase()
                    : username2.toUpperCase()}
                </span>
                {"  "}
                selected square {"  "}
                <span className="font-semibold text-green-600">
                  {turn.position + 1}
                  {"  "}
                </span>
                using{"  "}
                <span
                  className={`font-bold ${
                    turn.player === chosenSymbolUser1
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {turn.player}
                </span>
              </p>
              {Play === "Computer" && (
                <p className="text-gray-800">
                  <span className="font-bold text-red-600">Computer </span>
                  selected square{" "}
                  <span className="font-semibold text-green-600">
                    {turn.computerPostiton + 1}
                  </span>{" "}
                  using{" "}
                  <span className="font-bold text-red-600">
                    {turn.computer}
                  </span>{" "}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
