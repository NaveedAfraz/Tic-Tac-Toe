import React, { useContext } from "react";
import { GameContext } from "../../src/context/context";

export const GameMode = ({ handleMode }) => {
  const { Play, winnerPlayer, step2, setstep2 } = useContext(GameContext);
  return (
    <div>
      {!step2 && winnerPlayer == null ? (
        <>
          <div className="text-center space-y-4">
            <p className="text-xl font-bold">Select Game Mode</p>
            <div className="flex justify-center space-x-4">
              <button
                className={`py-2 px-6 bg-green-500 text-white rounded-lg cursor-pointer ${
                  Play === "Computer" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleMode("Computer")}
              >
                Computer
              </button>
              <button
                className={`py-2 px-6 bg-green-500 text-white rounded-lg cursor-pointer ${
                  Play === "1 vs 1" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleMode("1 vs 1")}
              >
                1 vs 1
              </button>
            </div>
          </div>
          <button
            className="w-full py-2 bg-purple-500 text-white rounded-lg cursor-pointer mt-4"
            onClick={() => setstep2(true)}
            disabled={!Play} // Disable no mode is selected
          >
            Next
          </button>
        </>
      ) : null}
    </div>
  );
};
