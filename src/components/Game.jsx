import { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState("X");

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (!board.includes("")) return "draw";

    return null;
  };

  const computerMove = (currentBoard) => {
    const emptyCells = currentBoard
      .map((cell, index) => (cell === "" ? index : null))
      .filter((index) => index !== null);

    const randomCell =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];

    const newBoard = [...currentBoard];

    newBoard[randomCell] = "O";

    const result = checkWinner(newBoard);

    setBoard(newBoard);

    if (result) {
      setWinner(result);
    } else {
      setTurn("X");
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner || turn !== "X") return;

    const newBoard = [...board];

    newBoard[index] = "X";

    setBoard(newBoard);

    const result = checkWinner(newBoard);

    if (result) {
      setWinner(result);
      return;
    }

    setTurn("O");

    setTimeout(() => {
      computerMove(newBoard);
    }, 500);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setTurn("X");
  };

  return (
    <div
      className="
    w-85
    p-7
    rounded-4xl
    bg-bg-card
    border border-border-light
    shadow-lg
    font-galmuri
  "
    >
      <div className="flex justify-between items-center mb-6">
        <h2
          className="
            text-sm
            tracking-[0.3em]
            uppercase
            text-text-primary
          "
        >
          tic tac toe
        </h2>

        <span
          className="
            text-xs
            text-text-muted
            uppercase
            tracking-widest
          "
        >
          vs ai
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="
              aspect-square
              rounded-xl
              bg-bg-secondary
              border border-border-light
              text-3xl
              flex items-center justify-center
  
              hover:bg-accent-butter
              hover:scale-105
  
              transition-all
              duration-300
  
              text-text-primary
            "
          >
            {cell && (
              <span
                className={
                  cell === "X" ? "text-accent-pink" : "text-accent-sage"
                }
              >
                {cell}
              </span>
            )}
          </button>
        ))}
      </div>

      <p
        className="
          text-center
          uppercase
          tracking-[0.25em]
          text-[10px]
          mt-6
          text-text-secondary
        "
      >
        {winner
          ? winner === "draw"
            ? "draw ✦"
            : `${winner} wins ✦`
          : turn === "X"
            ? "your turn"
            : "computer thinking..."}
      </p>

      {winner && (
        <button
          onClick={resetGame}
          className="
            mt-5
            w-full
            py-3
  
            rounded-full
  
            bg-btn-primary
            text-text-white
  
            hover:bg-btn-primary-hover
  
            transition-normal
  
            text-xs
            tracking-widest
            uppercase
          "
        >
          play again
        </button>
      )}
    </div>
  );
};

export default Game;
