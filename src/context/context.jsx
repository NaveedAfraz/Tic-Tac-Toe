import { createContext, useEffect, useState } from "react";
export const GameContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [showMode, setShowMode] = useState(true);
  const [Play, setPlay] = useState("");
  const [draw, setDraw] = useState(false);
  const [turns, setTurns] = useState([]);
  // const [startGAME, setStartGame] = useState(false);
  // const [winner, setWinner] = useState(false);
  const [Computer, setComputer] = useState("");
  const [showModal, setshowModal] = useState(true);
  const [winnerPlayer, setWinnerPlayer] = useState(null);
  const [currentPlayer, setcurrentPlayer] = useState("");
  const [randomIndex, setRandomIndex] = useState();
  const [user1, setuser1] = useState("");
  const [user2, setuser2] = useState("");
  const [showWinnerModal, setshowWinnerModal] = useState([]);
  const [Pickedbox, setPickedBox] = useState(false);
  const [username2, setusername2] = useState("");
  const [username1, setusername1] = useState("");
  const [signUp, setsignUp] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [FetchedDetails, setFetchedDetails] = useState([]);
  //console.log(turns);
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  const handleClick = (index) => {
    //console.log(index);
    const newBoard = [...board];
    if (newBoard[index] !== null) return;
    newBoard[index] = currentPlayer;
    // console.log(newBoard);
    setBoard(newBoard);
    const isWinner = winningCombinations.some(([a, b, c]) => {
      return (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      );
    });
    if (isWinner) {
      setWinnerPlayer(currentPlayer);
      setshowModal(true);
      setstep2(false);
      setShowMode(false);
      return;
    }
    let newRandomIndex;
    //computer mode
    const empty = newBoard
      .map((item, index) => (item === null ? index : null)) // Map to null for non-null items
      .filter((index) => index !== null);
    if (Play === "Computer") {
      const random = Math.floor(Math.random() * empty.length);
      //console.log(true);
      newRandomIndex = empty[random];
      setRandomIndex(newRandomIndex);
      setShowMode(false);
      newBoard[newRandomIndex] = Computer;
      // console.log(random)
     // console.log(newBoard[randomIndex]);
      setBoard(newBoard);
    }
    //copied down code
    const computerWins = winningCombinations.some((combination) => {
      const [a, b, c] = combination;
      //currentPlayer == "X" ? setcurrentPlayer("O") : setcurrentPlayer("X");
      return (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      );
    });
    // till here
    const hasEmptySpaces = newBoard.includes(null);
    if (computerWins) {
      setWinnerPlayer(Computer);
      setshowModal(true);
      setcurrentPlayer("O");
      setstep2(false);
      setShowMode(false);
      //setcurrentPlayer(null);
      // console.log(`Player ${currentPlayer} wins!`);
    } else if (!hasEmptySpaces) {
      setshowModal(true);
      setDraw(true);
      setShowMode(false);
      // console.log(false);
    } else if (Play !== "Computer") {
      console.log(true);
      setcurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    //console.log("clicked");
    setTurns((prevTurns) => [
      ...prevTurns,
      {
        player: currentPlayer,
        position: index,
        username: currentPlayer === "X" ? username1 : username2,
        computer: Computer,
        computerPostiton: newRandomIndex,
      },
    ]);
  };
  const [chosenSymbolUser1, setChosenSymbolUser1] = useState("");
  const [step2, setstep2] = useState(false);
  const Reset = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setcurrentPlayer("");
    setshowWinnerModal([]);
    setDraw(false);
    setPickedBox(false);
    setShowMode(true);
    setComputer("");
    setstep2(false);
    setPlay("");
    setuser2("");
    setusername1("");
    setWinnerPlayer(null);
    setshowModal(true);
    setTurns([]);
    setusername2("");
  };
  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setcurrentPlayer,
        handleClick,
        draw,
        setshowModal,
        showModal,
        Reset,
        showMode,
        step2,
        setstep2,
        setShowMode,
        Play,
        setPlay,
        user2,
        setuser2,
        // startGAME,
        // setStartGame,
        Computer,
        setComputer,
        turns,
        setTurns,
        randomIndex,
        winnerPlayer,
        setWinnerPlayer,
        signUp,
        setsignUp,
        user1,
        setuser1,
        FetchedDetails,
        setFetchedDetails,
        showWinnerModal,
        setshowWinnerModal,
        Pickedbox,
        setPickedBox,
        username2,
        setusername2,
        username1,
        setusername1,
      
        chosenSymbolUser1,
        setChosenSymbolUser1,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
