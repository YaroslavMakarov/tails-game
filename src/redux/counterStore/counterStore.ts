import { Action } from 'redux';

const INCREASE_COUNT = "INCREASE_COUNT";
const CLEAR_COUNT = "CLEAR_COUNT";

type IncreaseCount = Action<typeof INCREASE_COUNT>;
type ClearCount = Action<typeof CLEAR_COUNT>;

export const increaseCount = (): IncreaseCount => (
    {
        type: INCREASE_COUNT,
    }
);
export const clearCount = (): ClearCount => (
    {
        type: CLEAR_COUNT,
    }
);

export type AllCountAction = IncreaseCount | ClearCount;

export type InitialCountState = {
    count: number;
};

const initialState: InitialCountState = {
    count: 0,
};

const countReducer = (state = initialState, action: AllCountAction) => {
    switch (action.type) {
        case INCREASE_COUNT: return {
            count: state.count + 1,
        };
        case CLEAR_COUNT: return {
            count: 0,
        };

        default: return state;
    }
};

export default countReducer;

