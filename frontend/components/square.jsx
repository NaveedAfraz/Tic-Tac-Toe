import React, { useContext } from "react";
import { GameContext } from "../../src/context/context";

export const Square = ({ value, index, mode }) => {
  const { handleClick , chosenSymbolUser1} = useContext(GameContext);

  return (
    <>
      <div
        className={`w-20 h-20 border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
          mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        onClick={() => handleClick(index)}
      >
        <span
          className={`text-2xl font-bold ${
            (value === chosenSymbolUser1 && value === "O") ||
            (value === "X" && chosenSymbolUser1 === "X")
              ? "text-blue-600"
              : "text-red-600"
          }`}
        >
          {value}
        </span>
      </div>
    </>
  );
};
