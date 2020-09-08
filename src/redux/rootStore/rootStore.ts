import { combineReducers, createStore } from 'redux';
import tailsReducer, { InitialTileState } from "../tilesStore/tilesStore";
import viewedTailReducer, { InitialViewedTileState } from "../vievwedTile/viewedTileStore";
import countReducer, { InitialCountState } from "../counterStore/counterStore";
import resultReducer, {InitialResultState} from "../resultsStore/resultsStore";
import startGameReducer, {InitialStartGameState} from "../startGameStore/startGameStore";
import { loadState, saveState } from "../../localStorage/localStorage";

const rootReducer = combineReducers({
   tails: tailsReducer,
   viewedTail: viewedTailReducer,
   count: countReducer,
   results: resultReducer,
   startGame: startGameReducer,
});

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

export type State = {
    tails: InitialTileState;
    viewedTail: InitialViewedTileState;
    count: InitialCountState;
    results: InitialResultState;
    startGame: InitialStartGameState;
}

//tailsSelector
export const tilesSelector = (state: State) => (state.tails.tiles);

//viewedTailSelector
export const viewedTileSelector = (state: State) => (state.viewedTail.viewedTile);

//stepCounter
export const counterSelector = (state: State) => (state.count.count);

//resultsSelectors
export const nameSelector = (state: State) => (state.results.name);
export const resultsSelector = (state: State) => (state.results.results);

// startGameSelector
export const startGameSelector = (state: State) => (state.startGame.status);

export default store;
