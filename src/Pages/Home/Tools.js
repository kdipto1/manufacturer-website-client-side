import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Utility/Loading";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("homeTools", () =>
    fetch("https://server-12-12.herokuapp.com/tools").then((res) => res.json())
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
        {tools?.slice(0, 6).map((tool) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              key={tool?._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img style={{ width: "200px" }} src={tool?.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{tool?.name}</h2>
                <p>{tool?.description}</p>
                <p>Price: {tool?.price}</p>
                <p>Quantity: {tool?.quantity}</p>
                <p>MOQ: {tool?.moq}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link to={`/purchase/${tool._id}`}>Purchase</Link>
                  </button>
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
