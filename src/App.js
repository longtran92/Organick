import logo from "./logo.svg";
import "./scss/_common.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import Testimonial from "./components/Testimonial";
import AllProduct from "./components/AllProduct";
import EcoFriendly from "./components/EcoFriendly";
import Gallery from "./components/Gallery";
import News from "./components/News";
import SubscribeNewsletter from "./components/SubscribeNewsletter";
import Footer from "./components/Footer";

function App() {
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
}

export default App;
