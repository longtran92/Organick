import React from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";

import Feature from "./Feature";
import Button from "../Button";

const AboutUs = () => {
  const buttonData = [
    {
      id: uuidv4(),
      btnText: "Shop Now",
      btnIcon: "./assets/images/utilities/btn-arrow.png",
    },
  ];

  const featureData = [
    {
      id: uuidv4(),
      featureImg: "./assets/images/page-home/aboutUsFeature-1.png",
      featureHeading: "Organic Foods Only",
      featureDescription:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: uuidv4(),
      featureImg: "./assets/images/page-home/aboutUsFeature-2.png",
      featureHeading: "Quality Standards",
      featureDescription:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];
  return (
    <section className="aboutUs-section">
      <div className="container-wrapper">
        <div className="background-img">
          <img src="./assets/images/page-home/about-us.png" alt="" />
        </div>
        <div className="container">
          <div className="section-content">
            <div className="right-content">
              <span className="sub-title"> About Us </span>
              <h2 className="heading">
                We Believe in Working Accredited Farmers
              </h2>
              <p className="description">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              {featureData.map((feature) => (
                <Feature key={feature.id} featureContent={feature} />
              ))}

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
      </div>
    </section>
  );
};

export default AboutUs;
