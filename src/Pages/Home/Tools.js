import React from "react";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import Loading from "../Utility/Loading";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("homeTools", () =>
    fetch("https://server-12-12.herokuapp.com/tools?size=6").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <h2 className="text-6xl font-bold text-center text-blue-900 mb-4">
        Tools
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {tools.map((tool) => {
          return (
            <div key={tool._id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={tool.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
