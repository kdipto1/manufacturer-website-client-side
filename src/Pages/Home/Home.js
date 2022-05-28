import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools";


const Home = () => {
  return (
    <div className="bg-slate-100">
      <Banner />
      <Tools />
      <div className="mt-16 ">
        <h2 className="text-center mb-4 text-green-400 font-bold text-7xl">
          Trusted By Our Buyers
        </h2>
        <Summary />
      </div>
      <Reviews/>
    </div>
  );
};

export default Home;
