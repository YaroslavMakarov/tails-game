import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Tile.scss";
import {AllTilesAction, isOpenTile} from "../../redux/tilesStore/tilesStore";
import { viewedTileSelector } from "../../redux/rootStore/rootStore";
import {AllViewedTileAction, setViewedTile} from "../../redux/vievwedTile/viewedTileStore";
import {AllCountAction, increaseCount} from "../../redux/counterStore/counterStore";

type Props = {
    tile: Tile;
}

const Tile: React.FC<Props> = ({ tile }) => {
    const { id, color, isOpen, isFindCouple } = tile;
    const tilesDispatch = useDispatch<Dispatch<AllTilesAction>>();
    const viewedTileDispatch = useDispatch<Dispatch<AllViewedTileAction>>();
    const counterDispatch = useDispatch<Dispatch<AllCountAction>>();
    const viewedTile = useSelector(viewedTileSelector);


    const clickOnTile = (tile: Tile) => {
        if (viewedTile.length === 0) {
            tilesDispatch(isOpenTile(id, true));
            viewedTileDispatch(setViewedTile(tile));
            counterDispatch(increaseCount());
        }
        if (viewedTile.length === 1 && viewedTile[0].id !== tile.id) {
            tilesDispatch(isOpenTile(id, true));
            viewedTileDispatch(setViewedTile(tile));
            counterDispatch(increaseCount());
        }
    };

    return (
        <div
            className={
                isFindCouple
                    ? "tile tile__found"
                    : "tile"
            }
            onClick={
                () => {
                    clickOnTile(tile);
                }
            }
            style={isOpen
                ? {
                backgroundColor: color,
                }
                : {
                    backgroundColor: 'tan',
                    transform: 'rotateY(180deg)'
                }
            }
        >
        </div>
    )
};

export default Tile;
