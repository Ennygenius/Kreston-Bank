import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Nav/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import s2 from "../../assets/s2.png";
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
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthContext";
import Transaction from "./Transaction";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  const [nav, setNav] = useState(false);
  const { id } = useParams();
  const redirect = useNavigate();

  const HandleLogout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      redirect("/signin");
    }
  };

  const handleNav = () => {
    setNav(!nav);
    console.log("clicked");
  };

  return (
    <div className="">
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
          <h2 className="font-bold tracking-wider py-5">
            Welcome, <span className="text-btn"> {user.firstName}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-2 mb-5">
            <div className="card bg-overlay w-full text-center md:h-[20vh] flex flex-col justify-center items-center py-5">
              <div className="flex flex-col items-center">
                <AiFillGold fontSize={60} color="#CAFF33" />
                <h2 className="text-xl md:text-2xl uppercase font-bold py-2">
                  Account Number
                </h2>
              </div>
              <div className="">
                <h2>9012113050</h2>
              </div>
            </div>

            <div className="card bg-overlay w-full text-center  md:h-[20vh] flex flex-col justify-center items-center py-5">
              <div className="flex flex-col items-center">
                <FaDollarSign fontSize={60} color="#CAFF33" />
                <h2 className="text-xl md:text-2xl uppercase font-bold py-2">
                  $USD BALANCE
                </h2>
              </div>
              <div className="">
                <h2>${user.Balance}</h2>
              </div>
            </div>
            <div className="card bg-overlay w-full text-center md:h-[20vh] flex flex-col justify-center items-center py-5 ">
              <div className="flex flex-col items-center">
                <BsFillArrowUpRightCircleFill fontSize={50} color="#CAFF33" />
                <h2 className="text-xl md:text-2xl uppercase font-bold py-2">
                  Account Name
                </h2>
              </div>
              <div className="uppercase font-bold">
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
              </div>
            </div>
          </div>

          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
