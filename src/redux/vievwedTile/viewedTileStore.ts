import { Action } from 'redux';

const SET_VIEWED_TILE = "SET_VIEWED_TILE";
const REMOVE_ALL_TILES = "REMOVE_ALL_TILES";

type SetViewedTile = Action<typeof SET_VIEWED_TILE> & {
    viewedTile: Tile;
}

type RemoveAllTiles = Action<typeof REMOVE_ALL_TILES>

export const setViewedTile = (viewedTile: Tile): SetViewedTile => (
    {
        type: SET_VIEWED_TILE,
        viewedTile,
    }
);

export const removeAllTiles = (): RemoveAllTiles => (
    {
        type: REMOVE_ALL_TILES,
    }
) ;

export type AllViewedTileAction = SetViewedTile | RemoveAllTiles;

export type InitialViewedTileState = {
    viewedTile: Tile[];
};

const initialViewedTileState: InitialViewedTileState = {
    viewedTile: [],
};

const viewedTailReducer = (state = initialViewedTileState, action: AllViewedTileAction) => {
    switch (action.type) {
        case SET_VIEWED_TILE:
            return {
            viewedTile: [...state.viewedTile, action.viewedTile]
        };
        case REMOVE_ALL_TILES: return {
            viewedTile: [],
        };

        default: return state;
    }
};

export default viewedTailReducer;
