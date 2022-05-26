import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const params = useParams();
  let [tool, setTool] = useState({});
  // let moq = tool.moq;
  let [moqs, setMoqs] = useState(tool.moq);
  console.log(moqs);
  let [moq1, setMoq] = useState();
  console.log(moq1);
  useEffect(() => {
    const getTool = async () => {
      const url = `http://localhost:5000/tools/${params.id}`;
      try {
        const { data } = await axios.get(url);
        setTool(data);
        setMoq(data.moq);
        setMoqs(data.moq);
      } catch (error) {
        console.log(error);
      }
    };
    getTool();
  }, [params.id]);

  const handleQuantity = () => {
    if (moq1 < moqs) {
      toast(`please order ${moqs} or more than ${moqs} piece`);
    }
    if (moq1 > tool?.quantity) {
      toast(`we dont have stock more than ${tool.quantity} piece`);
    }
  };
  const handlePurchase = (event) => {
    event.preventDefault();
    let quantity = event.target.minimum.value;
    let name = event.target.name.value;
    let email = event.target.email.value;
    let address = event.target.address.value;
    let number = event.target.number.value;
    let totalPrice = parseInt(quantity) * parseInt(tool.price);
    console.log(quantity, name, email, address, number, totalPrice);
    const order = { quantity, name, email, address, number, totalPrice };
    axios
      .post("http://localhost:5000/orders", { order })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section>
      <div className="card lg:card-side bg-base-100 mx-auto lg:w-4/6 shadow-xl mt-6">
        <figure>
          <img src={tool?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tool?.name}</h2>
          <p>{tool?.description}</p>
          <p>Price: {tool?.price}</p>
          <p>Quantity: {tool?.quantity}</p>
          <p>Minimum order quantity: {tool?.moq}</p>
        </div>
      </div>
      <div className="card lg:w-2/4 bg-base-100 shadow-xl mx-auto mt-8">
        <div className="card-body">
          <h2 className="card-title mx-auto">Purchase</h2>
          <form className="flex flex-col mx-auto" onSubmit={handlePurchase}>
            <label className="mx-auto">Quantity:</label>
            <input
              onInput={(e) => setMoq(e.target.value)}
              onBeforeInput={handleQuantity}
              onBlur={handleQuantity}
              onClick={handleQuantity}
              onChange={handleQuantity}
              onFocus={handleQuantity}
              name="minimum"
              // id="moq"
              value={moq1}
              type="number"
              placeholder="quantity"
              className="input input-bordered input-accent mx-auto mb-4 w-28"
            />
            <input
              disabled
              defaultValue={user?.email}
              name="email"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-64 mb-4 max-w-xs"
            />
            <input
              type="text"
              name="name"
              defaultValue={user?.name || ""}
              placeholder="Your Name"
              className="input input-bordered input-accent w-64 mb-4 max-w-xs"
            />
            <input
              name="address"
              type="text"
              placeholder="Your Address"
              className="input input-bordered input-accent w-64 mb-4 max-w-xs"
            />
            <input
              type="number"
              name="number"
              placeholder="your Phone Number"
              className="input input-bordered input-accent mb-4 w-64 max-w-xs"
            />
            <input
              disabled={moq1 < moqs || moq1 > tool?.quantity}
              type="submit"
              value="Order"
              className="btn btn-accent"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
