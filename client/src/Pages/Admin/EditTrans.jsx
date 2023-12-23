import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../Components/Heading";
import { AiOutlineUser } from "react-icons/ai";
import ms from "../../assets/microsoft-.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthContext";
import { BASE } from "../../Hooks/axios/axios";

const EditTrans = () => {
  const [Fetch, setFetch] = useState("");
  const [TName, setTName] = useState("");
  const [AcctNum, setAcctNum] = useState("");
  const [TStatus, setTStatus] = useState([]);
  const [BankName, setBankName] = useState("");
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const { id } = useParams();
  const URI = `/transaction/${id}`;

  useEffect(() => {
    const fetchAPI = async () => {
      const req = await BASE.get(URI, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFetch(req.data.trans);
      console.log(req.data.trans);
      setTName(req.data.trans.TName);
      setAcctNum(req.data.trans.AcctNum);
      setBankName(req.data.trans.BankName);
      setTStatus(req.data.trans.TStatus);
    };

    fetchAPI();
  }, []);

  const EditTrans = async () => {
    const response = await axios.patch(
      URI,
      {
        TName,
        AcctNum,
        BankName,
        TStatus,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };
  const HandleSubmit = (e) => {
    try {
      e.preventDefault();
      EditTrans();

      alert("success");
      navigate("/AdminDashboard");
      toast("success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className=" flex items-center flex-col md:justify-center">
        <Heading
          name={
            <div className=" mb-10 flex items-center my-10">
              <AiOutlineUser color="#CAFF33" />
              <h2>
                Edit <span className="text-btn"> Transaction</span>
              </h2>
            </div>
          }
        />

        <div className="flex md:flex-row flex-col justify-between border border-overlay md:shadow-lg p-3 md:p-5 ">
          <div className="img hidden md:block w-[60%]">
            <img src={ms} alt="" className="" />
          </div>
          <form className="form md:ml-10 flex-1" onSubmit={HandleSubmit}>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Transaction Name:
              </label>
              <input
                type="text"
                required
                value={TName}
                placeholder="enter your name"
                className=" py-2 w-full p-2 text-background"
                onChange={(e) => {
                  setTName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Account Number:
              </label>
              <input
                type="text"
                value={AcctNum}
                placeholder="enter your name"
                className=" py-2 w-full p-2 text-background"
                onChange={(e) => {
                  setAcctNum(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Status:
              </label>

              <select
                name="select"
                required
                id=""
                className=" py-2 w-full p-2 text-background"
                value={TStatus}
                onChange={(e) => {
                  setTStatus(e.target.value);
                }}
              >
                <option value="Pending">Pending</option>
                <option value="Success">Success</option>
              </select>
              <p>
                You selected <span className="text-btn">{TStatus}</span>
              </p>
            </div>

            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Bank Name:
              </label>
              <input
                type="text"
                required
                value={BankName}
                placeholder="enter your name"
                className=" py-2 w-full p-2 text-background"
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className=" bg-btn text-background px-5 py-2 rounded-full text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTrans;
