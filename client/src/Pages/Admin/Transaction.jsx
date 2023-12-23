import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../../Hooks/AuthContext";
import { BASE } from "../../Hooks/axios/axios";

const Transaction = () => {
  const [users, setUsers] = useState([]);
  const URI2 = "/transaction";
  const { token } = useContext(AuthContext);
  const fethURI = async () => {
    const response = await BASE.get(URI2, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data.trans);
    console.log(response.data.trans);
  };

  useEffect(() => {
    fethURI();
  }, []);
  return (
    <>
      <div className="">
        <h2 className="mx-10 mt-10">
          All <span className="text-btn">Transaction</span>
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
                      Transaction Type
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Account Number
                    </th>
                    <th scope="col" className="px-6 py-4">
                      From
                    </th>

                    <th scope="col" className="px-6 py-4">
                      To
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Amount
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Bank Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
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
                          {user.TName}
                        </td>
                      </Link>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.AcctNum}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.From.firstName}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">{user.To}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.Amount}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {user.BankName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.TStatus}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {moment(user.Date).format("YYYY-MM-DD")}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link to={`/edittrans/${user._id}`}>Edit</Link>
                        <Link to={`/deletetrans/${user._id}`} className="pl-2">
                          Delete
                        </Link>

                        {/* <p>Delete</p> */}
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

export default Transaction;
