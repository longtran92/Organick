import React from "react";
import "./style.scss";

import Button from "../Button";
import ProductCard from "../Categories/ProductCard";
import { v4 as uuidv4 } from "uuid";

const AllProduct = () => {
  const cardData = [
    {
      id: uuidv4(),
      badge: "Vegetable",
      cardImg: "./assets/images/page-home/offer-section/product-1.png",
      cardTitle: "Mung Bean",
      oldPrice: "$20.00",
      newPrice: "$11.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Vegetable",
      cardImg: "./assets/images/page-home/offer-section/product-2.png",
      cardTitle: "Brown Hazelnut",
      oldPrice: "$20.00",
      newPrice: "$12.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Vegetable",
      cardImg: "./assets/images/page-home/offer-section/product-3.png",
      cardTitle: "Onion",
      oldPrice: "$20.00",
      newPrice: "$17.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Vegetable",
      cardImg: "./assets/images/page-home/offer-section/product-4.png",
      cardTitle: "Cabbage",
      oldPrice: "$20.00",
      newPrice: "$17.00",
      stars: 5,
    },
  ];
  return (
    <section className="allProduct-section">
      <div className="container">
        <div className="section-content">
          <div className="header-container">
            <div className="heading-container">
              <span className="subTitle">Offer</span>
              <h2 className="heading">We Offer Organic For You</h2>
            </div>
            <Button
              btnType="yellow"
              btnText="View All Product"
              btnIcon="./assets/images/utilities/btn-arrow.png"
            />
          </div>
          <div className="productCards-container">
            {cardData.map((data) => (
              <ProductCard key={data.id} cardData={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
