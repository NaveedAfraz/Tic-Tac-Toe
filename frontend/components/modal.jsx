import React, { useContext, useState } from "react";
import { GameContext } from "../../src/context/context";
// import { SaveWinner } from "./saveWinner";
import { GameMode } from "./GameMode";
import { ShowWinner } from "./ShowWinner";
import { UserMode } from "./userMode";
export const Modal = ({ formData }) => {
  const {
    currentPlayer,
    showModal,
    setshowModal,
    Reset,
    Computer,
    Play,
    setcurrentPlayer,
    setPlay,
    draw,
    setComputer,
    winnerPlayer,
    user2,
    setPickedBox,
    setuser2,
    setuser1,
    user1,
    setChosenSymbolUser1,
    username2,
    username1,
    step2,
  } = useContext(GameContext);
  // const [step2, setstep2] = useState(false);

  const handleMode = (value) => {
    setPlay(value);
  };

  //console.log(showWinnerModal);

  const handleX = () => {
    setcurrentPlayer("X"); // for computer mode
    setuser1("X");
    setChosenSymbolUser1("X"); // for user mode
    // setuser2("O");
    console.log(user1);
    setComputer("O");
  };

  const handleO = () => {
    setcurrentPlayer("O"); // for computer mode
    setuser1("O");
    setChosenSymbolUser1("O")
    // setuser2("X");
    setComputer("X");
  };
  const handleUser2 = (e) => {
    setuser2(e);
    console.log(user2);
  };
  const handleStart = () => {
    if (
      (Play == "Computer" && currentPlayer !== "" && Computer !== "") ||
      (Play == "1 vs 1" && user2 !== "" && username1 && username2)
    ) {
      setPickedBox(true);
      setshowModal(false);
    } else {
      alert("Please fill in all the required fields.");
    }
  };
  //console.log(Play);
  return (
    <>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-start"
          style={{ zIndex: 2 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md w-96 flex flex-col items-center space-y-6 mt-60">
            <GameMode handleMode={handleMode} />
            <UserMode
              handleX={handleX}
              handleO={handleO}
              handleUser2={handleUser2}
              formData={formData}
            />

            {step2 && !draw && (
              <button
                className="w-2/3 py-2 bg-purple-500 text-white rounded-lg cursor-pointer mt-3"
                onClick={handleStart}
                disabled={!currentPlayer || user2 == user1} // Disable if no mark is selected
              >
                Start Game
              </button>
            )}

            {winnerPlayer !== null && <ShowWinner formData={formData} />}

            {draw && (
              <p className="text-lg font-bold text-orange-500 text-center">
                It's a draw!
              </p>
            )}

            {/* Reset Game Button */}
            {(winnerPlayer !== null || draw) && (
              <button
                className="py-2 px-6 bg-red-500 hover:bg-red-600 text-white rounded-lg cursor-pointer transition duration-200"
                onClick={Reset}
              >
                Reset Game
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
