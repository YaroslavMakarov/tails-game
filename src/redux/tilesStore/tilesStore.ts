import { Action } from 'redux';
import {tiles} from "../../tiles/tiles";

const IS_OPEN_TILE = "IS_OPEN_TILE";
const CLOSE_ALL_TILES = "CLOSE_ALL_TILES";
const IS_FIND_COUPLE = "IS_FIND_COUPLE";
const CHANGE_ALL_FIND_COUPLE_STATUS = "CHANGE_ALL_FIND_COUPLE_STATUS";
const SHACKED_TILES = "SHACKED_TILES";

type IsOpenTail = Action<typeof IS_OPEN_TILE> & {
    id: number;
    isOpen: boolean;
}

type CloseAllTiles = Action<typeof CLOSE_ALL_TILES>;

type IsFindCouple = Action<typeof IS_FIND_COUPLE> & {
    color: string;
};

type ChangeAllFindCoupleStatus = Action<typeof CHANGE_ALL_FIND_COUPLE_STATUS>;

type ShackedTiles = Action<typeof SHACKED_TILES>;


export const isOpenTile = (id: number, isOpen: boolean): IsOpenTail => ({
    type: IS_OPEN_TILE,
    id,
    isOpen,
});

export const closeAllTiles = (): CloseAllTiles => (
    {
        type: CLOSE_ALL_TILES,
    }
);

export const isFindCoupleStatus = (color: string): IsFindCouple => (
    {
        type: IS_FIND_COUPLE,
        color,
    }
);

export const changeAllFindCoupleStatus = (): ChangeAllFindCoupleStatus => (
    {
        type: CHANGE_ALL_FIND_COUPLE_STATUS,
    }
);

export const shackedTiles = (): ShackedTiles => (
    {
        type: SHACKED_TILES,
    }
);

export type InitialTileState = {
    tiles: Tile[],
}

const initialTileState: InitialTileState = {
    tiles: tiles,
};

export type AllTilesAction = IsOpenTail
    | CloseAllTiles
    | IsFindCouple
    | ChangeAllFindCoupleStatus
    | ShackedTiles;

const tilesReducer = (state = initialTileState, action: AllTilesAction) => {
    switch (action.type) {
        case IS_OPEN_TILE: return {
           tiles: state.tiles.map(tile =>
               (action.id === tile.id)
                   ? {
               ...tile,
                   isOpen: action.isOpen,
                   }
                   : tile
           )
        };
        case CLOSE_ALL_TILES: return {
            tiles: state.tiles.map(tile => (
                {
                    ...tile,
                    isOpen: false,
                }
            ))
        };
        case IS_FIND_COUPLE: return {
          tiles: state.tiles.map(tile => (
              (tile.color === action.color)
              ? {
                  ...tile,
                      isFindCouple: true,
                  }
                  : tile
          ))
        };
        case CHANGE_ALL_FIND_COUPLE_STATUS: return {
            tiles: state.tiles.map(tile => (
                {
                    ...tile,
                    isFindCouple: false,
                    isOpen: false,
                }
            ))
        };
        case SHACKED_TILES: return {
            tiles: [...state.tiles].sort(() => Math.random() - 0.5),
            };

        default: return state;
    }
};

export default tilesReducer;
