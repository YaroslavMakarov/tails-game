import { Action } from 'redux';

const IS_START_GAME = "IS_START_GAME";

type IsStartGame = Action<typeof IS_START_GAME> & {
    status: boolean;
};

export const changeStartGameStatus = (status: boolean): IsStartGame => ({
    type: IS_START_GAME,
    status,
});

export type AllStartGameActions = IsStartGame;

export type InitialStartGameState = {
    status: boolean;
};

const initialStartGameState: InitialStartGameState = {
    status: false,
};

const startGameReducer = (state = initialStartGameState, action: AllStartGameActions) => {
    switch(action.type) {
        case IS_START_GAME: return {
            status: action.status
        }

        default: return state;
    }
};

export default startGameReducer;
