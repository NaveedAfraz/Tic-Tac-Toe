import React, { useContext } from "react";
import { GameContext } from "../../src/context/context";
import { IoMdArrowRoundBack } from "react-icons/io";
export const UserMode = ({ handleX, handleO, handleUser2, formData }) => {
  const {
    currentPlayer,
    draw,
    Play,
    user2,
    user1,
    step2,
    username2,
    setusername2,
    username1,
    setstep2,
    Reset,
    setusername1,
  } = useContext(GameContext);
  console.log(user1, user2);
  const handleBack=()=>{
    setstep2((prevStep2) => !prevStep2)
    Reset()
  }
  return (
    <div className="w-full">
      {step2 && !draw && (
        <>
          <button
            onClick={handleBack}
            className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-600"
          >
            <IoMdArrowRoundBack size={20} />
          </button>
          {Play == "1 vs 1" && (
            <>
              <h2 className="text-xl  font-bold font-semibold text-gray-700 mb-2 text-center">
                Enter the 1st UserName
              </h2>
              <input
                type="text"
                onChange={(e) => setusername1(e.target.value.toUpperCase().trim())}
                value={username1}
                placeholder="Enter User 1 Name"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center"
              />
              <h2 className="text-xl  font-bold font-semibold text-gray-700 mb-2 text-center">
                Enter the 2nd UserName
              </h2>
              <input
                type="text"
                onChange={(e) => setusername2(e.target.value.toUpperCase().trim())}
                value={username2}
                placeholder="Enter User 2 Name"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center"
              />
            </>
          )}

          {/* Select X or O */}
          <div className="text-center space-y-4">
            <p className="text-lg my-4 text-gray-700 font-bold">
              Select {Play === "1 vs 1" ? "User1" : "Your"} Mark
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className={`py-2 px-6 bg-green-500 text-white rounded-lg cursor-pointer ${
                  currentPlayer === "X" ? "border-2 border-black" : ""
                }`}
                onClick={handleX}
              >
                X
              </button>
              <button
                className={`py-2 px-6 bg-green-500 text-white rounded-lg cursor-pointer ${
                  currentPlayer === "O" ? "border-2 border-black" : ""
                }`}
                onClick={handleO}
              >
                O
              </button>
            </div>
            {Play == "1 vs 1" && (
              <>
                <p className="text-lg text-gray-700 font-bold">
                  {/* Select {username2.toUpperCase()*/} Select User 2 Mark{" "}
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    className={`py-2 px-6 bg-green-500 text-white rounded-lg cursor-pointer ${
                      user2 === "X" ? "border-2 border-black" : ""
                    }`}
                    onClick={() => handleUser2("X")}
                    // disabled={}
                  >
                    X
                  </button>
                  <button
                    className={`py-2 px-6 bg-green-500 text-white rounded-lg cursor-pointer ${
                      user2 === "O" ? "border-2 border-black" : ""
                    }`}
                    onClick={() => handleUser2("O")}
                    // disabled={}
                  >
                    O
                  </button>
                </div>{" "}
                <div className="h-6"> 
                <p className="font-bold text-red-600 font-medium mt-2 text-center">
                  {user2 === user1 &&
                    username1 !== "" &&
                    username2 !== "" &&
                    "User 1 and User 2 can't have the same mark"}
                </p>
                <p className="font-bold text-red-600 font-medium mt-2 text-center">
                  {(username1 == "" ||
                    username2 == "") && "Please Enter The Usernames"}
                </p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
