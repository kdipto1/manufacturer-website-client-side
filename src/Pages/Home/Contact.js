import React from "react";
import contact from "../Images/contact.png"

const Contact = () => {
  return (
    <div className="container pb-10 mx-auto">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={contact} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-blue-400">Contact Us</h2>
          <div class="card-actions justify-center">
            <form onSubmit={(event)=>event.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered input-success w-full max-w-xs"
              />
              <br />
              <input
                type="text"
                placeholder="Your Email"
                class="input my-2 input-bordered input-success w-full max-w-xs"
              />
              <br />
              <textarea
                type="text"
                placeholder="Type here"
                class="input input-bordered input-success w-full max-w-xs"
              />
              <br />
              <input
                type="submit"
                class="input input-bordered input-success w-full max-w-xs"
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
