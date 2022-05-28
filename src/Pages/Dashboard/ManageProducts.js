import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Utility/Loading";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("manageTools", () =>
    fetch("https://server-12-12.herokuapp.com/manageTools", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const handleProductDelete = async (id) => {
    const url = `https://server-12-12.herokuapp.com/tools/${id}`;
    try {
      const { data } = await axios.delete(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (data) {
        toast("Product deleted");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-x-hidden">
      <h2>Manage products:{tools?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Id</th>
              <th>Delete product</th>
            </tr>
          </thead>
          {tools.map((tool, index) => {
            return (
              <tbody key={tool?._id}>
                <tr>
                  <th>{index + 1}</th>
                  <td>{tool?.name}</td>
                  <td>{tool?._id}</td>
                  <td>
                    <div>
                      <label
                        htmlFor="manage-product-modal"
                        className="btn btn-xs modal-button"
                      >
                        Delete
                      </label>

                      <input
                        type="checkbox"
                        id="manage-product-modal"
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Are you sure about deleting this product?
                          </h3>
                          <div className="modal-action">
                            <label
                              onClick={() => handleProductDelete(tool?._id)}
                              htmlFor="manage-product-modal"
                              className="btn btn-md"
                            >
                              Yes
                            </label>
                            <label
                              htmlFor="manage-product-modal"
                              className="btn btn-md"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ManageProducts;
