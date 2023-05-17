import React from "react";
import "./style.scss";

const Feature = (props) => {
  const { featureContent } = props;
  const { featureImg, featureHeading, featureDescription } = featureContent;
  return (
    <div className="feature">
      <div className="feature-img">
        <img src={featureImg} alt="" />
      </div>
      <div className="feature-content">
        <h5 className="feature-heading">{featureHeading}</h5>
        <span className="feature-description">{featureDescription}</span>
      </div>
    </div>
  );
};

export default Feature;
