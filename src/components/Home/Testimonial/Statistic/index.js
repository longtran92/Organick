import React from "react";
import "./style.scss";

const Statistic = (props) => {
  const { statData } = props;
  const { statNumber, statTitle } = statData;
  return (
    <div className="statistic-wrapper">
      <div className="statistic-content">
        <span className="stat-number">{statNumber}</span>
        <span className="stat-title">{statTitle}</span>
      </div>
    </div>
  );
};

export default Statistic;
