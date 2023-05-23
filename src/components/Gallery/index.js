import React from "react";
import "./style.scss";

import { v4 as uuidv4 } from "uuid";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const galleryCardData = [
    {
      id: uuidv4(),
      backgroundImg: "./assets/images/page-home/gallery/gallery-1.png",
      galleryName: "Organic Juice",
    },
    {
      id: uuidv4(),
      backgroundImg: "./assets/images/page-home/gallery/gallery-2.png",
      galleryName: "Organic Food",
    },
    {
      id: uuidv4(),
      backgroundImg: "./assets/images/page-home/gallery/gallery-3.png",
      galleryName: "Nuts Cookis",
    },
  ];

  return (
    <section className="gallery-section">
      <div className="container-wrapper">
        <div className="section-content">
          {galleryCardData.map((data) => (
            <GalleryCard key={data.id} galleryData={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
