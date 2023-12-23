import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthContext";
import { BASE } from "../../Hooks/axios/axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { token } = useContext(AuthContext);

  const URI2 = "/users";
  const fethURI = async () => {
    const response = await BASE.get(URI2, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data.users);
    console.log(response.data.users);
  };
  useEffect(() => {
    fethURI();
  }, []);
  return (
    <>
      <div className="">
        <h2 className="mx-10">
          All <span className="text-btn">Users</span>
        </h2>
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full mx-5 py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light mt-10">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Gender
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Role
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, key) => (
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:text-white border-neutral-500 dark:hover:bg-blue-600"
                      key={key}
                    >
                      <Link to={`/student/${user._id}`}>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.firstName}
                        </td>
                      </Link>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.lastName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.Gender}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.isAdmin === true ? "Admin" : "User"}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link to={`/editstudent/${user._id}`}>Edit</Link>
                        <Link
                          to={`/deleteStudent/${user._id}`}
                          className="pl-2"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
