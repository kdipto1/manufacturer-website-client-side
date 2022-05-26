import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Register from "./Pages/Login/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          <Route path="manageProducts" element={<ManageProducts />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
