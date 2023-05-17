import React from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";

import Button from "../Button";
import ProductCard from "./ProductCard";

const Categories = () => {
  const buttonData = [
    {
      id: uuidv4(),
      btnText: "Load More",
      btnIcon: "./assets/images/utilities/btn-arrow.png",
    },
  ];

  const cardData = [
    {
      id: uuidv4(),
      badge: "Vegetable",
      cardImg: "./assets/images/page-home/our-products/product-1.png",
      cardTitle: "Calabrese Broccoli",
      oldPrice: "$20.00",
      newPrice: "$13.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Fresh",
      cardImg: "./assets/images/page-home/our-products/product-2.png",
      cardTitle: "Fresh Banana Fruites",
      oldPrice: "$20.00",
      newPrice: "$14.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Millets",
      cardImg: "./assets/images/page-home/our-products/product-3.png",
      cardTitle: "White Nuts",
      oldPrice: "$20.00",
      newPrice: "$15.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Vegetable",
      cardImg: "./assets/images/page-home/our-products/product-4.png",
      cardTitle: "Vegan Red Tomato",
      oldPrice: "$20.00",
      newPrice: "$17.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Health",
      cardImg: "./assets/images/page-home/our-products/product-5.png",
      cardTitle: "Mung Bean",
      oldPrice: "$20.00",
      newPrice: "$11.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Nuts",
      cardImg: "./assets/images/page-home/our-products/product-6.png",
      cardTitle: "Brown Hazelnut",
      oldPrice: "$20.00",
      newPrice: "$12.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Fresh",
      cardImg: "./assets/images/page-home/our-products/product-7.png",
      cardTitle: "Eggs",
      oldPrice: "$20.00",
      newPrice: "$17.00",
      stars: 5,
    },
    {
      id: uuidv4(),
      badge: "Fresh",
      cardImg: "./assets/images/page-home/our-products/product-8.png",
      cardTitle: "Zelco Suji Elaichi Rusk",
      oldPrice: "$20.00",
      newPrice: "$15.00",
      stars: 5,
    },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-content">
          <span className="sub-title">Categories</span>
          <h2 className="heading">Our Products</h2>
          <div className="productCards-container">
            {cardData.map((data) => (
              <ProductCard key={data.id} cardData={data} />
            ))}
          </div>
          <div className="btn">
            {buttonData.map((button) => (
              <Button
                key={button.id}
                btnText={button.btnText}
                btnIcon={button.btnIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
