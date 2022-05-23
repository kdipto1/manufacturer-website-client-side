import React from "react";
import Banner from "./Banner";
import Summary from "./Summary";
import Tools from "./Tools";


const Home = () => {
  return (
    <div>
      <h2>This is home, it will contain banner, tools</h2>
      <Banner />
      <Tools />
      <Summary/>
    </div>
  );
};

export default Home;
