import { Action } from 'redux';

const CHANGE_NICK_NAME = "CHANGE_NICK_NAME";
const ADD_RESULT = "ADD_RESULT";

type ChangeNickName = Action<typeof CHANGE_NICK_NAME> & {
    name: string;
}
type AddResult = Action<typeof ADD_RESULT> & {
    result: Result;
}

export const changeNickName = (name: string): ChangeNickName => (
    {
        type: CHANGE_NICK_NAME,
        name,
    }
);
export const addResult = (result: Result): AddResult => (
    {
        type: ADD_RESULT,
        result,
    }
);

export type AllResultActions = ChangeNickName | AddResult;

export type InitialResultState = {
    name: string;
    results: Result[];
}

const initialResultState: InitialResultState = {
    name: "Player",
    results: [],
};

const resultReducer = (state = initialResultState, action: AllResultActions) => {
    switch (action.type) {
        case CHANGE_NICK_NAME: return {
            ...state,
            name: action.name
        };
        case ADD_RESULT: return {
            ...state,
            results: (state.results.length >= 10)
                        ? [...state.results.slice(1, 10), action.result]
                        : [...state.results, action.result]
        };

        default: return state;
    }
};

export default resultReducer;
