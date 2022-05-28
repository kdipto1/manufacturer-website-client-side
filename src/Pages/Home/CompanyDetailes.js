import React from "react";
import CountUp from "react-countup";

const CompanyDetailes = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-green-400 font-bold text-4xl">
        We have manufactured <CountUp start={0} end={10000000} delay={3} duration={6} />+
        products till now{" "}
      </h2>
    </div>
  );
};

export default CompanyDetailes;
