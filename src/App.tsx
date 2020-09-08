import React from 'react';
import { useSelector } from "react-redux";
import './app.scss';
import TilesBody from "./components/TilesBody/TilesBody";
import StepCounter from "./components/StepCounter/StepCounter";
import {startGameSelector, tilesSelector} from "./redux/rootStore/rootStore";
import RestartGame from "./components/RestartGame/RestartGame";
import StartGame from "./components/StartGame/StartGame";

function App() {
    const tiles = useSelector(tilesSelector);
    const isStartGame = useSelector(startGameSelector);

    if (!isStartGame) {
        return (
            <StartGame />
        )
    }

    if (tiles.every(tile => tile.isFindCouple)) {
        return (
            <RestartGame />
        )
    }

  return (
    <div className="app">
        <StepCounter />
        <TilesBody />
    </div>
  );
}

export default App;
