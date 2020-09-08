import React from "react";
import './Results.scss';

type Props = {
    result: Result;
    index: number;
}

const Results: React.FC<Props> = ({ result, index }) => {

    return (
        <div className="results">
            <div className="results__list">
                <div className="results__item">
                    <div className="results__nickname results__description">
                        {`${index + 1} ${result.name}:`}
                    </div>
                    <div className="results__steps results__description">
                        {result.steps / 2}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Results;
