import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../Images/banner.jpg";
import banner1 from "../Images/banner1.jpg";

const Banner = () => {
  return (
    <div className="">
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
