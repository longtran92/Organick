import React from "react";

import Header from "../Header";
import Banner from "./Banner";
import Offer from "./Offer";
import AboutUs from "./AboutUs";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import AllProduct from "./AllProduct";
import EcoFriendly from "./EcoFriendly";
import Gallery from "./Gallery";
import News from "./News";
import SubscribeNewsletter from "./SubscribeNewsletter";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Offer></Offer>
      <AboutUs></AboutUs>
      <Categories></Categories>
      <Testimonial></Testimonial>
      <AllProduct></AllProduct>
      <EcoFriendly></EcoFriendly>
      <Gallery></Gallery>
      <News></News>
      <SubscribeNewsletter></SubscribeNewsletter>
      <Footer></Footer>
    </>
  );
};

export default Home;
