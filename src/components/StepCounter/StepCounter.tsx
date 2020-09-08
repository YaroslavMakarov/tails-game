import React from 'react';
import { useSelector } from "react-redux";
import './StepCounter.scss';
import { counterSelector } from "../../redux/rootStore/rootStore";

const StepCounter = () => {
    const counter = useSelector(counterSelector);

    const prepareCount = Math.floor(counter/2);

    return (
      <div className="counter">
          <h1>
              {`Steps to win: ${prepareCount}`}
          </h1>
      </div>
    );
};

export default StepCounter;
