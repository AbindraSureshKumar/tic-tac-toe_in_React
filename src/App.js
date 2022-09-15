import React, { useEffect, useState } from "react";
import SquareComponent from "./SquareComponent";
const initialState = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isX, updateIsX] = useState(false);
  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isX ? "X" : "O";
    updateGameState(strings);
    updateIsX(!isX);
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(` ${winner} won the Game !`);
      updateGameState(initialState);
    }
  }, [gameState]);
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  return (
    <div className="app-header">
      <p className="heading-text">TIC TAC TOE</p>
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          state={gameState[0]}
          onClick={() => {
            onSquareClicked(0);
          }}
        ></SquareComponent>
        <SquareComponent
          className="b-bottom-right"
          state={gameState[1]}
          onClick={() => {
            onSquareClicked(1);
          }}
        ></SquareComponent>
        <SquareComponent
          className="b-bottom"
          state={gameState[2]}
          onClick={() => {
            onSquareClicked(2);
          }}
        ></SquareComponent>
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          state={gameState[3]}
          onClick={() => {
            onSquareClicked(3);
          }}
        ></SquareComponent>
        <SquareComponent
          className="b-bottom-right"
          state={gameState[4]}
          onClick={() => {
            onSquareClicked(4);
          }}
        ></SquareComponent>
        <SquareComponent
          className="b-bottom"
          state={gameState[5]}
          onClick={() => {
            onSquareClicked(5);
          }}
        ></SquareComponent>
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-right"
          state={gameState[6]}
          onClick={() => {
            onSquareClicked(6);
          }}
        ></SquareComponent>
        <SquareComponent
          className="b-right"
          state={gameState[7]}
          onClick={() => {
            onSquareClicked(7);
          }}
        ></SquareComponent>
        <SquareComponent
          state={gameState[8]}
          onClick={() => {
            onSquareClicked(8);
          }}
        ></SquareComponent>
      </div>
      <button
        className="clear-button"
        onClick={() => {
          updateGameState(initialState);
        }}
      >
        CLEAR ALL
      </button>
      <p className="fc-aqua fw-600">GAME IN REACT</p>
    </div>
  );
}

export default App;
