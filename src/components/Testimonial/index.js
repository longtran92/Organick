import React from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import Testimony from "./Testimony";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonyData = [
    {
      id: uuidv4(),
      profileImg: "./assets/images/page-home/customer-profile.png",
      stars: 5,
      testimonyDescription:
        "Simply dummy text ofhe printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      consumerName: "Sara Taylor",
      consumerTitle: "Consumer",
    },
    {
      id: uuidv4(),
      profileImg: "./assets/images/page-home/customer-profile.png",
      stars: 5,
      testimonyDescription:
        "Simply dummy text ofhe printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      consumerName: "Sara Taylor",
      consumerTitle: "Consumer",
    },
    {
      id: uuidv4(),
      profileImg: "./assets/images/page-home/customer-profile.png",
      stars: 5,
      testimonyDescription:
        "Simply dummy text ofhe printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      consumerName: "Sara Taylor",
      consumerTitle: "Consumer",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container-wrapper">
        {/* <div className="background-img">
          <img
            src="./assets/images/page-home/testimony-background.png"
            alt=""
          />
        </div> */}
        <div className="container">
          <div className="section-content">
            <span className="sub-title">Testimonial</span>
            <h2 className="heading">What Our Customer Saying?</h2>
            <Slider {...settings}>
              {testimonyData.map((testimony) => (
                <Testimony key={testimony.id} data={testimony} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
