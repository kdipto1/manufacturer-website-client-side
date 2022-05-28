import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Utility/Loading";

const ManageOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allOrder", () =>
    fetch("https://server-12-12.herokuapp.com/orders", {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (loading || isLoading) {
    return <Loading />;
  }
  const handleShipping = async (id) => {
    const shipping = "shipped";
    try {
      const { data } = await axios.put(
        `https://server-12-12.herokuapp.com/orders/${id}`,
        {
          shipping: shipping,
        },
        {
          headers: {
            authorization: `${user?.email} ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      );
      console.log(data);
      if (data) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Manage orders:{orders?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Orderer Email</th>
              <th>Payment status</th>
              <th>Delivery</th>
              <th>Shipping status</th>
            </tr>
          </thead>
          {orders.map((order, index) => {
            return (
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order?.product}</td>
                  <td>{order?.email}</td>
                  <td>
                    {order?.status === "paid" && "Paid"}
                    {order?.status === "pending" && "Unpaid"}
                  </td>
                  <td>
                    {order?.status === "paid" && (
                      <button
                        onClick={() => handleShipping(order._id)}
                        className="btn btn-xs"
                      >
                        Ship
                      </button>
                    )}
                  </td>
                  <td>{order?.shipping}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
