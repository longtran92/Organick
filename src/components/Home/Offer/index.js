import React from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";

import OfferCard from "./offerCard/index";

const Offer = () => {
  const offerCardData = [
    {
      id: uuidv4(),
      type: "natural",
      backgroundImg: "./assets/images/page-home/offer-1.png",
      subTitle: "Natural!!",
      cardTitle: "Get Garden Fresh Fruits",
    },
    {
      id: uuidv4(),
      type: "offer",
      backgroundImg: "./assets/images/page-home/offer-2.png",
      subTitle: "Offer!!",
      cardTitle: "Get 10% off on Vegetables",
    },
  ];
  return (
    <section className="offer-section">
      <div className="container">
        <div className="offer-content">
          {offerCardData.map((cardData) => (
            <OfferCard key={cardData.id} cardInfo={cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
