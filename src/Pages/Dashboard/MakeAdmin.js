import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Utility/Loading";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("homeTools", () =>
    fetch("http://localhost:5000/makeAdmin").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const makeAdmin = async (id) => {
    const role = "admin";
    const url = `http://localhost:5000/makeAdmin/${id}`;
    try {
      const { data } = await axios.post(url, { role: role });
      if (data) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Make admin:{users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          {users?.map((user, index) => {
            return (
              <tbody key={user._id}>
                <tr>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    {user.role === "user" && (
                      <button
                        onClick={() => makeAdmin(user._id)}
                        className="btn btn-xs"
                      >
                        Make Admin
                      </button>
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

export default MakeAdmin;
