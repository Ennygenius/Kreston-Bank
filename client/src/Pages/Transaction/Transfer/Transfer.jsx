import React, { useContext, useState } from "react";
import s2 from "../../../assets/s2.png";
import {
  AiFillAppstore,
  AiFillBank,
  AiFillCalculator,
  AiFillGold,
  AiFillHighlight,
  AiFillProfile,
  AiFillWallet,
  AiOutlineAlignRight,
  AiOutlineClose,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FaDollarSign, FaHotel } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { AuthContext } from "../../../Hooks/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE } from "../../../Hooks/axios/axios";

const Transfer = () => {
  const [nav, setNav] = useState(false);
  const token = localStorage.getItem("token");

  const URI = "/transaction/sendMoney";
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [AcctNum, setAcctNum] = useState("");
  const [To, setTo] = useState("");
  const [From, setFrom] = useState({});
  const [Amount, setAmount] = useState(Number);
  const [TName, setTName] = useState("Transfer");
  const [BankName, setBankName] = useState("");

  const formData = new FormData();
  formData.append("AcctNum", AcctNum);
  formData.append("To", To);
  formData.append("From", From);
  formData.append("Amount", Amount);
  formData.append("TName", TName);
  formData.append("BankName", BankName);

  const Transfer = async () => {
    const response = await BASE.post(
      URI,
      {
        AcctNum,
        To,
        From,
        Amount,
        BankName,
        TName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  };

  const handleForm = (e) => {
    e.preventDefault();
    try {
      Transfer();
      navigate("/dashboard");
    } catch (error) {
      toast("Error", error);
    }
  };

  //logout
  const HandleLogout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
  };

  //handle navigation
  const handleNav = () => {
    setNav(!nav);
    console.log("clicked");
  };
  return (
    <div className="">
      <ToastContainer />
      <div className="topNav py-5 md:py-5 flex justify-between items-center px-10 bg-overlay sticky z-[1] bg-white top-0 pt-5  ">
        <div className="nav__logo flex items-center">
          <img src={s2} alt="" />
          <p className=" md:text-3xl ml-2 font-bold">KRESTON BANK</p>
        </div>

        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          {nav ? (
            <div className="">
              <AiOutlineClose fontSize={20} color="#CAFF33" />
            </div>
          ) : (
            <div className="bg-btn px-4 py-2 rounded-full">
              <AiOutlineAlignRight fontSize={20} color="black" />
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex items-center pr-2 cursor-pointer">
            <RxAvatar fontSize={30} />
            <Link to={"/profile"}>
              <p className="pl-1">Profile </p>
            </Link>
          </div>
          <p className="pl-2 cursor-pointer text-btn" onClick={HandleLogout}>
            {" "}
            Logout
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        {nav ? (
          <div className="sideNav bg-overlay w-[30%] px-10 pt-2 flex-1 md:hidden ">
            <ul className="text-center">
              <li className="my-10 py-10 ">
                <AiFillBank fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/dashboard"}>
                    Home
                  </Link>
                </small>
              </li>
              <li className="my-10 py-10">
                <AiFillAppstore fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/transfer"}>
                    Transfer
                  </Link>
                </small>
              </li>
              <li className="my-10 py-10">
                <AiFillHighlight fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/withdraw"}>
                    Withdraw
                  </Link>
                </small>
              </li>
              <li className="my-10 py-10">
                <AiFillWallet fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/dashboard"}>
                    Request Loan
                  </Link>
                </small>
              </li>
              <li className="my-10 py-10">
                <RiLuggageDepositFill fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/dashboard"}>
                    Deposit
                  </Link>
                </small>
              </li>
              <li className="my-10 py-10">
                <FaHotel fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/dashboard"}>
                    Reports
                  </Link>
                </small>
              </li>

              <li className="my-10 py-10">
                <AiFillCalculator fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/dashboard"}>
                    Loan
                  </Link>
                </small>
              </li>
            </ul>
            <ul className="text-center">
              <li className="my-10 py-10">
                <AiFillProfile fontSize={30} color="#CAFF33" />
                <small>
                  <Link className="font-bold" to={"/profile"}>
                    Profile
                  </Link>
                </small>
              </li>
              <li className="my-10 " onClick={HandleLogout}>
                <BiLogOutCircle fontSize={30} color="#CAFF33" />
                <small>Logout</small>
              </li>
            </ul>
          </div>
        ) : null}
        {!user.isAdmin && (
          <div className="sideNav bg-overlay w-[20%] md:h-[100vh] pt-2 flex-1 md:block hidden">
            <ul className="text-center">
              <Link to={"/dashboard"}>
                <li className="my-10 py-2 flex items-center justify-center">
                  <AiFillBank fontSize={25} color="#CAFF33" />
                  <span className="pl-2"> Home</span>
                </li>
              </Link>
              <Link to={"/transfer"}>
                <li className="my-10 py-2 flex items-center justify-center">
                  <AiFillAppstore fontSize={25} color="#CAFF33" />
                  <span className="pl-2">Transfer</span>
                </li>
              </Link>
              <Link to={"/withdraw"}>
                <li className="my-10 py-2 flex items-center justify-center">
                  <AiFillHighlight fontSize={25} color="#CAFF33" />
                  <span className="pl-2"> Withdraw </span>
                </li>
              </Link>
              <li className="my-10 py-2 flex items-center justify-center">
                <AiFillWallet fontSize={30} color="#CAFF33" />
                <span className="pl-2"> Request Loan</span>
              </li>
              <li className="my-10 py-2 flex items-center justify-center">
                {" "}
                <RiLuggageDepositFill fontSize={30} color="#CAFF33" />
                <span className="pl-2"> Deposit </span>
              </li>
              <li className="my-10 py-2 flex items-center justify-center">
                <AiFillCalculator fontSize={30} color="#CAFF33" />
                <span className="pl-2"> Reports</span>
              </li>{" "}
              <li className="my-10 py-2 flex items-center justify-center">
                <FaHotel fontSize={30} color="#CAFF33" />
                <span className="pl-2">Loans</span>
              </li>
            </ul>
          </div>
        )}
        <div className="wjjj pt-5 md:w-[85%] w-[100%] px-2">
          <h2 className="mx-10 mt-10 text-2xl font-bold text-center py-5">
            Transafer <span className="text-btn">Money</span>
          </h2>
          <div className="flex md:w-[50%] m-auto md:flex-row flex-col justify-between border border-overlay md:shadow-lg p-3 md:p-5 ">
            <form className="form md:ml-10 flex-1" onSubmit={handleForm}>
              <div className="flex flex-col my-5">
                <label htmlFor="name" className="py-2 font-bold">
                  Transaction Type:
                </label>
                <select
                  name="user"
                  id=""
                  disabled
                  className="py-2 px-2 w-full text-background"
                  onChange={(e) => {
                    setTName(e.target.value);
                  }}
                >
                  <option value={TName}>{TName}</option>
                </select>
              </div>

              <div className="flex flex-col my-5">
                <label htmlFor="name" className="py-2 font-bold">
                  Account Number:
                </label>
                <input
                  type="text"
                  value={AcctNum}
                  placeholder="E.g 223572537277"
                  className=" py-2 w-full p-2 text-background"
                  onChange={(e) => {
                    setAcctNum(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="name" className="py-2 font-bold">
                  From:
                </label>
                <select
                  name="user"
                  id=""
                  className="py-2 px-2 w-full text-background"
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                >
                  <option value="select">select</option>
                  <option value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                </select>
              </div>
              <div className="flex flex-col my-5">
                <label htmlFor="name" className="py-2 font-bold">
                  To:
                </label>
                <input
                  type="text"
                  value={To}
                  placeholder=""
                  required
                  className=" py-2 px-2 w-full text-background"
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col my-5">
                <label htmlFor="name" className="py-2 font-bold">
                  Amount:
                </label>
                <input
                  type="number"
                  placeholder="Amount in digits"
                  value={Amount}
                  required
                  className=" py-2 px-2 w-full text-background"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <h2 className="py-2">
                  Balance: <span className="text-btn">${user.Balance}</span>
                </h2>
                {Amount > user.Balance && (
                  <p className="">Value Exceedding Balance</p>
                )}
              </div>

              <div className="flex flex-col my-5">
                <label htmlFor="name" className="py-2 font-bold">
                  Bank Name:
                </label>
                <input
                  type="text"
                  value={BankName}
                  required
                  placeholder="Bank Name"
                  className=" py-2 px-2 w-full text-background"
                  onChange={(e) => {
                    setBankName(e.target.value);
                  }}
                />
              </div>

              {Amount > user.Balance ? (
                <div className="">
                  <button
                    disabled
                    type="submit"
                    className=" bg-btnDisabled text-white px-5 py-2 rounded-full text-sm cursor-not-allowed"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="">
                  <button
                    type="submit"
                    className=" bg-btn text-background px-5 py-2 rounded-full text-sm"
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
