import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Utility/Loading";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("manageTools", () =>
    fetch("https://server-12-12.herokuapp.com/tools").then((res) => res.json())
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
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Manage products:{tools?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{tool?.name}</td>
                  <td>{tool?._id}</td>
                  <td>
                    <div>
                      <label
                        for="manage-product-modal"
                        class="btn btn-xs modal-button"
                      >
                        Delete
                      </label>

                      <input
                        type="checkbox"
                        id="manage-product-modal"
                        class="modal-toggle"
                      />
                      <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">
                            Are you sure about deleting this product?
                          </h3>
                          <div class="modal-action">
                            <label
                              onClick={() => handleProductDelete(tool?._id)}
                              for="manage-product-modal"
                              class="btn btn-md"
                            >
                              Yes
                            </label>
                            <label
                              for="manage-product-modal"
                              class="btn btn-md"
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
