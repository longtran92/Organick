import React from "react";
import "./style.scss";

import Button from "../Button";

const SubscribeNewsletter = () => {
  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-content">
          <h2 className="heading">Subscribe to our Newsletter</h2>
          <form className="subscribe-form" action="">
            <input type="text" placeholder="Your Email Address" />
            <Button
              btnType="noIcon"
              btnText="Subscribe"
              btnIcon="./assets/images/utilities/btn-arrow.png"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
