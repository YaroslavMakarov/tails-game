import React, {Dispatch, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Tile from "../Tile/Tile";
import "./TilesBody.scss";
import {tilesSelector, viewedTileSelector} from "../../redux/rootStore/rootStore";
import {AllTilesAction, closeAllTiles, isFindCoupleStatus, shackedTiles} from "../../redux/tilesStore/tilesStore";
import {AllViewedTileAction, removeAllTiles} from "../../redux/vievwedTile/viewedTileStore";

const TilesBody = () => {
    const tilesDispatch = useDispatch<Dispatch<AllTilesAction>>();
    const viewedTileDispatch = useDispatch<Dispatch<AllViewedTileAction>>()
    useEffect(() => {
        tilesDispatch(shackedTiles());
    }, []);
    const tiles = useSelector(tilesSelector);
    const viewedTile = useSelector(viewedTileSelector);

    //checking viewedTiles
    useEffect(() => {
        if (viewedTile.length === 2) {
            if (viewedTile[0].color !== viewedTile[1].color) {
                setTimeout(() => {
                    tilesDispatch(closeAllTiles());
                    viewedTileDispatch(removeAllTiles());
                }, 500);
            }

            if (viewedTile[0].color === viewedTile[1].color) {
                setTimeout(() => {
                    tilesDispatch(isFindCoupleStatus(viewedTile[0].color));
                    viewedTileDispatch(removeAllTiles());
                }, 500);
            }
        }
    }, [viewedTile]);

    return (
        <div className="tiles">
            {tiles.map(tile => (
                <Tile
                    key={tile.id}
                    tile={tile}
                />
            ))}
        </div>
    )
};

export default TilesBody;
