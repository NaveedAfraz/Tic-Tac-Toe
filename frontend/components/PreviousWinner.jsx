import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../src/context/context";
import "../../src/scrollbar.css";
export const PreviousWinner = ({ formData }) => {
  const {
    winnerPlayer,
    Computer,
    Play,
    user2,
    user1,
    username2,
    setshowWinnerModal,
    username1,
  } = useContext(GameContext);
  const [previousData, setpreviousData] = useState([]);

  const sendWinnerData = async (winnerData) => {
    try {
      const response = await fetch("http://localhost:3001/api/winner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(winnerData, null, 2),
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error sending winner data:", error);
    }
  };

  const getWinnerdata = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/winner", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setpreviousData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Play === "1 vs 1") {
      sendWinnerData({
        Mode: Play,
        Winnerplayer: winnerPlayer,
        user_1: user1,
        user_2: user2,
        Username1: username1,
        Username2: username2,
        userData: formData,
      });
      setshowWinnerModal([
        {
          Mode: Play,
          Winnerplayer: winnerPlayer,
          user_1: user1,
          user_2: user2,
        },
      ]);
    } else if (winnerPlayer && Play !== "1 vs 1") {
      const winnerperson =
        winnerPlayer === Computer
          ? "Computer"
          : `${formData.username.toUpperCase()}`;
      sendWinnerData({
        Mode: Play,
        Winnerplayer: winnerPlayer,
        winner: winnerperson,
        userData: formData,
      });
      setshowWinnerModal([
        {
          Mode: Play,
          Winnerplayer: winnerPlayer,
          user_1: user1,
          user_2: user2,
        },
      ]);
    } else {
      getWinnerdata();
    }
  }, [winnerPlayer]);

  return (
    <div
      className="flex flex-col items-center p-3 rounded-lg shadow-lg max-w-md mx-auto overflow-hidden"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(10px)",
        height: "500px",
        zIndex: 0,
      }}
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Previous Winners
      </h2>
      <div className="flex items-center justify-center space-x-2 mb-4">
        <h1 className="text-lg font-semibold text-gray-600">UserName:</h1>
        <span className="text-lg font-semibold text-blue-600">
          {formData.username.toUpperCase()}
        </span>
      </div>

      <div className="flex space-x-6 w-full">
        {/* Computer vs User Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner w-1/2 flex flex-col">
          <h2 className="text-lg font-bold text-center mb-3 text-gray-800 border-b pb-2">
            Computer vs User
          </h2>
          <div
            className="overflow-y-auto custom-scrollbar"
            style={{
              maxHeight: "290px", // Adjust this height as necessary
              paddingRight: "4px", // Adds some padding for scrollbar visibility
            }}
          >
            {previousData.some(
              (data) =>
                data.userData.username === formData.username &&
                data.Mode === "Computer" &&
                data.winner !== ""
            ) ? (
              previousData.map(
                (data, index) =>
                  data.userData.username === formData.username &&
                  data.Mode === "Computer" &&
                  data.winner !== "" && (
                    <p
                      key={index}
                      className="text-gray-700 text-center font-medium mb-2"
                    >
                      <span
                        className={`font-semibold ${
                          data.winner === "Computer"
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                      >
                        {`${data.winner} `}
                      </span>
                      won using{" "}
                      <span className="text-blue-500">{data.Winnerplayer}</span>
                    </p>
                  )
              )
            ) : (
              <p className="text-gray-500 text-center">No data available</p>
            )}
          </div>
        </div>

        {/* 1 vs 1 Section */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner w-1/2 flex flex-col">
          <h2
            className="text-lg font-bold text-center mb-3 text-gray-800 border-b pb-2 "
            style={{ height: "" }}
          >
            1 vs 1
          </h2>
          <div
            className="overflow-y-auto custom-scrollbar"
            style={{
              maxHeight: "290px", // Adjust this height as necessary
              paddingRight: "4px",
            }}
          >
            {previousData.some(
              (data) =>
                data.Mode === "1 vs 1" &&
                data.userData.username === formData.username &&
                data.winner !== ""
            ) ? (
              previousData.map(
                (data, index) =>
                  data.Mode === "1 vs 1" &&
                  data.userData.username === formData.username &&
                  data.winner !== "" && (
                    <p
                      key={index}
                      className="text-gray-700 text-center font-medium mb-2"
                    >
                      <span className="font-semibold text-blue-600">
                        {data.user_1 === data.Winnerplayer
                          ? `${data.Username1} `
                          : `${data.Username2} `}
                      </span>
                      won using{" "}
                      <span className="text-blue-500">{data.Winnerplayer}</span>
                    </p>
                  )
              )
            ) : (
              <p className="text-gray-500 text-center">No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
