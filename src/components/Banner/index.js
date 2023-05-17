import React from "react";
import "./style.scss";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="content-container">
          <div className="banner-content">
            <span className="sub-title">100% Natural Food</span>
            <h1 className="heading">Choose the best healthier way of life</h1>
            <button className="btn-explore">
              <span>Explore Now</span>

              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                <path
                  d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
