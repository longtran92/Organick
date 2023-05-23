import React from "react";
import "./style.scss";

const GalleryCard = (props) => {
  const { galleryData } = props;
  const { id, backgroundImg, galleryName } = galleryData;
  return (
    <div className="gallery-card">
      <div className="background-img">
        <img src={backgroundImg} alt="" />
      </div>
      <span className="badge">{galleryName}</span>
    </div>
  );
};

export default GalleryCard;
