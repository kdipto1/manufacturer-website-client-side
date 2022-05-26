import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Utility/Loading";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return <Loading />
  }
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Dashboard
        </label>
        <h2 className="text-2xl font-bold text-green-500">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <li>
              <Link to="myOrders">My Orders</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="addReview">Add Review</Link>
            </li>
          )}
          <li>
            <Link to="myProfile">My Profile</Link>
          </li>
          {admin && (
            <li>
              <Link to="addProduct">Add Product</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="manageProducts">Manage Products</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="manageOrders">Manage Orders</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="makeAdmin">Make Admin</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
