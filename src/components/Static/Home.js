import React from "react";
import { ToastContainer } from "react-toastify";
import home from "../../assets/images/home.jpg";
import home1 from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
import home3 from "../../assets/images/home3.webp";
import home4 from "../../assets/images/home4.webp";
import homeCenter from '../../assets/images/homeCenter.jpg'
import HomeSlider from "../Static/HomeSlider";
import PageTitle from '../Shared/PageTitle';
import Footer from "../Shared/Footer";

const sliderImages = [
  {
    img: home,
  },
  {
    img: home1,
  },
  {
    img: home2,
  },
  {
    img: home3,
  },
  {
    img: home4,
  },
];

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"/>
      <HomeSlider sliderImages={sliderImages}>
        <img src={homeCenter} className="h-120 w-60 opacity-80" alt="Logo" />
      </HomeSlider> 
      <ToastContainer/>
      <Footer/>
    </div>
  );
};

export default Home;
