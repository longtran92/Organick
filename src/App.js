import logo from "./logo.svg";
import "./scss/_common.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Offer></Offer>
      <AboutUs></AboutUs>
      <Categories></Categories>
      <Testimonial></Testimonial>
    </>
  );
}

export default App;
