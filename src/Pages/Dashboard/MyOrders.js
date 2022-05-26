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
        const { data } = await axios.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMyOrders();
  }, [loading, user?.email]);
  console.log(orders);
  return (
    <div>
      <h2>My orders :{orders?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
