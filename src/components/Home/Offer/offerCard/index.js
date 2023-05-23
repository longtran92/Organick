import React from "react";
import "./style.scss";

const OfferCard = (props) => {
  const { cardInfo } = props;
  const { type, backgroundImg, subTitle, cardTitle } = cardInfo;
  return (
    <div className={`offerCard ${type}`}>
      <div className="background-img">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="card-content">
        <span className="sub-title">{subTitle}</span>
        <h3 className="card-title">{cardTitle}</h3>
      </div>
    </div>
  );
};

export default OfferCard;
