import React, { useState, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import './RestartGame.scss';
import { AllTilesAction, changeAllFindCoupleStatus } from "../../redux/tilesStore/tilesStore";
import { AllCountAction, clearCount } from "../../redux/counterStore/counterStore";
import {counterSelector, nameSelector, resultsSelector} from "../../redux/rootStore/rootStore";
import {addResult, AllResultActions} from "../../redux/resultsStore/resultsStore";
import Results from "../Results/Results";
import {AllStartGameActions, changeStartGameStatus} from "../../redux/startGameStore/startGameStore";

const RestartGame = () => {
    const tilesDispatch = useDispatch<Dispatch<AllTilesAction>>();
    const countDispatch = useDispatch<Dispatch<AllCountAction>>();
    const resultDispatch = useDispatch<Dispatch<AllResultActions>>();
    const startGameDispatch = useDispatch<Dispatch<AllStartGameActions>>();
    const count = useSelector(counterSelector);
    const name = useSelector(nameSelector);
    const results = useSelector(resultsSelector);
    const [isResults, setIsResults] = useState<boolean>(false);

    const restartGame = () => {
        tilesDispatch(changeAllFindCoupleStatus());
        countDispatch(clearCount());
        resultDispatch(addResult(
            {
                name: name,
                steps: count,
            }
        ))
    };
    const showResults = () => {
        resultDispatch(addResult(
            {
                name: name,
                steps: count,
            }
        ));
        setIsResults(true);
    };

    return (
        <div className="restart">
            {!isResults
            && <div className="restart__button-wrapper">
                <button
                    onClick={() => restartGame()}
                    className="restart__button"
                >
                    Restart game
                </button>
                <button
                    className="restart__button"
                    onClick={() => showResults()}
                >
                    Show latest results
                </button>
            </div>}
            {isResults
            && <div className="restart__results-wrapper">
                <div className="restart__result-header">
                    Latest results :
                </div>
                {results.map((result, index) => (
                    <Results
                        result={result}
                        index={index}
                    />
                ))}
                <button
                    className="restart__results-button restart__button"
                    onClick={() => {
                        startGameDispatch(changeStartGameStatus(false));
                        tilesDispatch(changeAllFindCoupleStatus());
                        countDispatch(clearCount());
                    }}
                >
                    Restart game
                </button>
            </div>}
        </div>
    );
};

export default RestartGame;
