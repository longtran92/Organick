import React from "react";
import "./style.scss";

const EcoFriendly = () => {
  return (
    <section className="ecoFriendly-section">
      <div className="container-wrapper">
        <div className="background-img"></div>
        <div className="container">
          <div className="section-content">
            <div className="right-content">
              <span className="sub-title">Eco Friendly</span>
              <h2 className="heading">Econis is a Friendly Organic Store</h2>
              <div className="intro-container">
                <h5 className="intro-title">Start with Our Company First</h5>
                <p className="intro-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="intro-container">
                <h5 className="intro-title">Learn How to Grow Yourself</h5>
                <p className="intro-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="intro-container">
                <h5 className="intro-title">Farming Strategies of Today</h5>
                <p className="intro-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;
