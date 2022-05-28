import React from "react";
import contact from "../Images/contact.png";

const Contact = () => {
  return (
    <div className="container pb-10 mx-auto overflow-x-hidden">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={contact} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-400">Contact Us</h2>
          <div className="card-actions justify-center">
            <form onSubmit={(event) => event.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-success w-full max-w-xs"
              />
              <br />
              <input
                type="text"
                placeholder="Your Email"
                className="input my-2 input-bordered input-success w-full max-w-xs"
              />
              <br />
              <textarea
                type="text"
                placeholder="Type here"
                className="input input-bordered input-success w-full max-w-xs"
              />
              <br />
              <input
                type="submit"
                className="input input-bordered input-success w-full max-w-xs"
                value="Contact"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
