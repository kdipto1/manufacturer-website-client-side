import React from "react";
import { useQuery } from "react-query";
import Loading from "../Utility/Loading";
import { FaUserAlt } from "react-icons/fa";
const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("homeReviews", () =>
    fetch("https://server-12-12.herokuapp.com/review").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-16 pb-10 container mx-auto">
      <h2 className="mb-4 text-center font-bold text-4xl text-blue-400">
        Buyer Reviews
      </h2>
      <div className="grid px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-16">
        {reviews.map((review) => {
          return (
            <div key={review._id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="card-actions justify-center">
                  <h2 className="text-2xl text-cyan-400">
                    <FaUserAlt />
                  </h2>
                </div>
                <h2 className="card-title">{review?.name}</h2>
                <p>{review?.comment}</p>
                <p>Ratting: {review?.ratting}/5</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
