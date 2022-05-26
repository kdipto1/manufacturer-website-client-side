import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
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
      const url = `http://localhost:5000/orders?email=${email}`;
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
              <th>Job</th>
              <th>Transaction id</th>
            </tr>
          </thead>
          {orders.map((order, index) => {
            return (
              <tbody key={order._id}>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order?.product}</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
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
