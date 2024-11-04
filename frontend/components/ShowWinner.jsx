import React, { useContext } from "react";
import { GameContext } from "../../src/context/context";

export const ShowWinner = ({ formData }) => {
  const {
    Computer,
    Play,
    draw,
    winnerPlayer,
    username2,
    showWinnerModal,
    username1,
  } = useContext(GameContext);
  return (
    <>
      <div>
        {(winnerPlayer || draw) && (
          <div className="flex flex-col items-center space-y-4 w-full">
            {}
            {winnerPlayer && (
              <>
                <h1 className="text-2xl font-extrabold text-center text-green-600">
                  Congratulations!
                </h1>
                <p className="text-lg font-bold text-green-500 text-center">
                  Winner:{" "}
                  {winnerPlayer === Computer && Play === "Computer"
                    ? " Computer"
                    : ` ${winnerPlayer} `}
                  {Play !== "Computer" &&
                    showWinnerModal.map((data, index) => (
                      <span
                        key={index}
                        className="text-lg font-bold text-green-500"
                      >
                        {data.user_1 === data.Winnerplayer
                          ? username1
                          : username2}
                      </span>
                    ))}
                </p>
              </>
            )}
          </div>
        )}
      </div>{" "}
    </>
  );
};
