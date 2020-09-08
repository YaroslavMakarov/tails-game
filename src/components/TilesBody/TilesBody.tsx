import React, {Dispatch, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Tile from "../Tile/Tile";
import "./TilesBody.scss";
import { tilesSelector } from "../../redux/rootStore/rootStore";
import {AllTilesAction, shackedTiles} from "../../redux/tilesStore/tilesStore";

const TilesBody = () => {
    const tilesDispatch = useDispatch<Dispatch<AllTilesAction>>();
    useEffect(() => {
        tilesDispatch(shackedTiles());
    }, []);
    const tiles = useSelector(tilesSelector);

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
