import React, { useContext } from "react";
import { GameContext } from "../../src/context/context";
import { Square } from "./square";
import { Modal } from "./modal";
import { PreviousWinner } from "./PreviousWinner";
import { HistoryMoves } from "./historyMoves";
export const Board = ({ formData }) => {
  const {
    board,
    username1,
    Play,
    Computer,
    user2,
    chosenSymbolUser1,
    user1,
    username2,
    Pickedbox,
  } = useContext(GameContext);

  return (
    <>
      {/* Main container with background image */}

      <div
        className="flex flex-col items-center p-4 min-h-screen relative"
        style={{
          backgroundImage: "url('/4312899.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backdropFilter: "blur(20px) brightness(0.6)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* Flex container to align Board and Info side-by-side */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 mb-8 relative">
          {/* Board Container with fixed width */}
          <div className="grid grid-cols-3 gap-2">
            {board.map((box, index) => (
              <Square
                key={index}
                value={box}
                index={index}
                className="w-20 h-20 bg-gray-200 hover:bg-gray-300 flex justify-center items-center text-3xl font-bold cursor-pointer"
              />
            ))}
          </div>

          {Pickedbox && (
            <div
              className="text-gray-800 text-lg font-semibold p-4 bg-white bg-opacity-70 rounded-lg shadow-md slide-from-left absolute flex flex-col justify-center items-center text-center"
              style={{
                width: "220px",
                top: "20%",
                left: "260px",
                minHeight: "180px",
                zIndex: 0,
              }}
            >
              {Play === "1 vs 1" ? (
                <p className="text-center text-lg font-medium">
                  <span 
                    className={`font-bold ${
                      user1 === chosenSymbolUser1  ? "text-blue-600" : "text-red-600"
                    }`}
                  >
                    {username1} <span className="text-black text-base"> picked </span> {user1}
                  </span>
                  <br />
                  <span
                    className={`font-bold ${
                      user2 === "O" || user1 === chosenSymbolUser1  ? "text-red-600" : "text-blue-600"
                       
                    }`}
                  >
                    {username2} <span className="text-black text-base"> picked </span>{user2}
                  </span>
                </p>
              ) : (
                <p>
                  <span className="font-bold text-blue-600">
                    {formData.username.toUpperCase()}
                  </span>{" "}
                  picked{" "}
                  <span className="font-bold text-blue-600">{user1}</span>{" "}
                  <br />
                  <span className="font-bold text-red-600">COMPUTER</span>{" "}
                  picked{" "}
                  <span className="font-bold text-red-600">{Computer}</span>
                </p>
              )}
            </div>
          )}
        </div>

        <Modal formData={formData} />

        <div className="flex flex-row space-x-6 w-full max-w-4xl mt-6">
          <div className="w-1/2">
            <PreviousWinner formData={formData} />
          </div>
          <div className="w-1/2 flex flex-row space-x-6 max-w-4xl ">
            <HistoryMoves formData={formData} />
          </div>
        </div>
      </div>

      {/* CSS for Animation */}
      <style jsx>{`
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .slide-from-left {
          animation: slideFromLeft 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};
