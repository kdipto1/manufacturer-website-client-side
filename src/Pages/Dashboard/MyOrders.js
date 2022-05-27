import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Utility/Loading";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (loading) {
      return;
    }
    const getMyOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/userOrders?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `${user?.email} ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    };
    getMyOrders();
  }, [loading, user?.email]);
  return (
    <div>
      <h2>My orders :{orders?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total Price(usd)</th>
              <th>Payment</th>
            </tr>
          </thead>
          {orders.map((order, index) => {
            return (
              <tbody key={order._id}>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order?.product}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.totalPrice}</td>
                  <td>
                    {order?.status === "pending" && (
                      <Link to={`/dashboard/payment/${order?._id}`}>
                        <button className="btn btn-xs btn-success">Pay</button>
                      </Link>
                    )}
                    {order?.status === "paid" && (
                      <div>
                        <p>
                          <span className="text-success">Paid</span>
                        </p>
                        <p>
                          Transaction id:{" "}
                          <span className="text-success">
                            {order?.transactionId}
                          </span>
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
