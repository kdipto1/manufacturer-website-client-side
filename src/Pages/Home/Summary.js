import React from "react";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
const Summary = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className="container mt-16 gap-6 mx-auto grid-cols-2 grid lg:grid-cols-4 overflow-x-hidden"
    >
      <div className="mx-auto">
        <FaFontAwesomeFlag className="text-7xl " />
        <h1 className="font-bold text-4xl ">72</h1>
        <p className="font-bold ">Countries</p>
      </div>
      <div className="mx-auto">
        <AiOutlineFundProjectionScreen className="text-7xl" />
        <h1 className="font-bold text-4xl">666+</h1>
        <p className="font-bold">Complete Project</p>
      </div>
      <div className="mx-auto">
        <BsPeople className="text-7xl" />
        <h1 className="font-bold text-4xl">1600+</h1>
        <p className="font-bold">Happy Clients</p>
      </div>
      <div className="mx-auto">
        <FcLikePlaceholder className="text-7xl" />
        <h1 className="font-bold text-4xl">432+</h1>
        <p className="font-bold">Feedback</p>
      </div>
    </section>
  );
};

export default Summary;
