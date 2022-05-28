import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Utility/Loading";

const ManageOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const { data: orders, isLoading } = useQuery("allOrder", () =>
    fetch("https://server-12-12.herokuapp.com/orders", {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Manage orders:admin {orders?.length}</h2>
    </div>
  );
};

export default ManageOrders;
