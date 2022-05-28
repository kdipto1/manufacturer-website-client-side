import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../Images/banner.jpg";
import { IoIosArrowDropdown } from "react-icons/io";

const Banner = () => {
  return (
    <div className="overflow-x-hidden pb-10">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ronix</h1>
            <p className="mb-5">Quality Products.</p>
            <h2>
              <IoIosArrowDropdown className="font-bold text-4xl text-center mx-auto" />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
