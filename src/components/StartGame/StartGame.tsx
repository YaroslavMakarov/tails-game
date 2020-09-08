import React, {ChangeEvent, Dispatch, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import './StartGame.scss';
import { nameSelector } from "../../redux/rootStore/rootStore";
import {AllResultActions, changeNickName} from "../../redux/resultsStore/resultsStore";
import {AllStartGameActions, changeStartGameStatus} from "../../redux/startGameStore/startGameStore";



const StartGame = () => {
    const [isNickName, setIsNickName] = useState<boolean>(false);
    const name = useSelector(nameSelector);
    const resultDispatch = useDispatch<Dispatch<AllResultActions>>();
    const startGameDispatch = useDispatch<Dispatch<AllStartGameActions>>();

    const checkNickNameSize = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.length;
        if (value < 2 || value >= 10) {
            setIsNickName(true);
            resultDispatch(changeNickName(event.target.value));
        } else {
            setIsNickName(false);
            resultDispatch(changeNickName(event.target.value));
        }
    };
    return (
        <div className="start-game">
            <div className="start-game__container">
                <div className="start-game__content">
                    <div className="start-game__input-description">
                        Enter your nick name:
                    </div>

                    <div className="start-game__input-wrapper">
                        <input
                            className="start-game__input"
                            type="text"
                            value={name}
                            onChange={(event) => checkNickNameSize(event)}
                        />
                        {isNickName && <div className="start-game__nickname-alarm">
                            nickname must be more than 2 and less than 11 characters
                        </div>}
                    </div>

                    <button
                        disabled={isNickName}
                        className="start-game__button btn-grad"
                        onClick={() => startGameDispatch(changeStartGameStatus(true))}
                    >
                        Start game
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartGame;
