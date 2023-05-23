import React from "react";
import "./style.scss";

import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import NewsCard from "./NewsCard";

const News = () => {
  const newsCardContent = [
    {
      id: uuidv4(),
      backgroundImg: "./assets/images/page-home/news/news-1.png",
      date: "25 Nov",
      authorName: "Rachi Card",
      articleHeading: "The Benefits of Vitamin D & How to Get It",
      articleDescription:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: uuidv4(),
      backgroundImg: "./assets/images/page-home/news/news-2.png",
      date: "25 Nov",
      authorName: "Rachi Card",
      articleHeading: "Our Favourite Summertime Tommeto",
      articleDescription:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-content">
          <div className="header-container">
            <div className="heading-container">
              <span className="subTitle">News</span>
              <h2 className="heading">
                Discover weekly content about organic food, & more
              </h2>
            </div>
            <Button
              btnType="transparent"
              btnText="More News"
              btnIcon="./assets/images/utilities/btn-arrow.png"
            />
          </div>
          <div className="newsCards-container">
            {newsCardContent.map((it) => (
              <NewsCard key={it.id} newsData={it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
