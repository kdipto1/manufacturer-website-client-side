import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return;
  }
  console.log(user);
  const handleReview = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const ratting = event.target.ratting.value;
    const email = user?.email;
    const name = user?.displayName;
    const review = { comment, name, email, ratting };
    // if (comment =="") {
      
    // }
    axios
      .post("http://localhost:5000/review", { review })
      .then(function (response) {
        console.log(response);
        if (response) {
          event.target.comment.value = ""
          event.target.ratting.value = ""
          toast("Review added")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Add review</h2>
          <form onSubmit={handleReview}>
            <label htmlFor="comment">Comment:</label>
            <input
              required
              name="comment"
              type="text"
              placeholder="Add your comment"
              class="my-2 input input-bordered input-success w-full max-w-xs"
            />
            <label className="" htmlFor="ratting">
              Ratting:
            </label>
            <input
              required
              type="number"
              name="ratting"
              min="0"
              max="5"
              placeholder="Rate us between 0 to 5"
              class="mt-2 input input-bordered input-success w-full max-w-xs"
            />
            <div class="card-actions justify-end">
              <input
                type="submit"
                value="Post"
                className="mt-4 btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
