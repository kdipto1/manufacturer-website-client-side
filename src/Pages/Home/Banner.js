import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../Images/banner.jpg";
import banner1 from "../Images/banner1.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div className="lg:h-4/5">
          <img src={banner} alt="" />
        </div>
        <div className="lg:h-4/5">
          <img src={banner1} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
