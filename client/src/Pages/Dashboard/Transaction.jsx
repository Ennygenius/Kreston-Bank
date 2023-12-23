import React, { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import moment from "moment";

const Transaction = () => {
  const { transaction } = useContext(AuthContext);

  return (
    <div className="">
      {" "}
      <div className="flex flex-col overflow-hidden">
        {" "}
        <h2 className="mx-10 mt-10">
          Transaction <span className="text-btn">History</span>
        </h2>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          {" "}
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
                  </tr>
                </thead>
                {!transaction ? (
                  <p>No Transaction</p>
                ) : (
                  transaction.map((t) => (
                    <tbody>
                      <tr
                        className="border-b transition duration-300 ease-in-out hover:text-white border-neutral-500 dark:hover:bg-blue-600"
                        // key={key}
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          {t.TName}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          {t.AcctNum}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          {t.From.lastName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{t.To}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {t.Amount}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          {t.BankName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {t.TStatus}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          {moment(t.Date).format("DD-MM-YYYY")}
                        </td>
                      </tr>
                    </tbody>
                  ))
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
