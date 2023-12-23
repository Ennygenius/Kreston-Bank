import React, { useContext, useState } from "react";
import micro from "../../assets/microsoft-.jpg";
import { AuthContext } from "../../Hooks/AuthContext";
import s2 from "../../assets/s2.png";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillAppstore,
  AiFillBank,
  AiFillCalculator,
  AiFillHighlight,
  AiFillProfile,
  AiFillWallet,
  AiOutlineAlignRight,
  AiOutlineClose,
} from "react-icons/ai";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const [nav, setNav] = useState(false);
  const redirect = useNavigate();

  const HandleLogout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      redirect("/");
    }
  };

  const handleNav = () => {
    setNav(!nav);
    console.log("clicked");
  };

  return (
    <div className="">
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
              <p className="pl-1">Profile </p>
            </div>
            <p className="pl-2 cursor-pointer text-btn" onClick={HandleLogout}>
              Logout
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          {nav ? (
            <div className="sideNav bg-overlay w-[30%] px-10 h-[100vh] pt-2 flex-1 md:hidden ">
              <ul className="text-center">
                <li className="my-10 py-10">
                  <AiFillBank fontSize={30} color="#CAFF33" />
                </li>
                <li className="my-10 py-10">
                  <AiFillAppstore fontSize={30} color="#CAFF33" />
                </li>
                <li className="my-10 py-10">
                  <AiFillHighlight fontSize={30} color="#CAFF33" />
                </li>
                <li className="my-10 py-10">
                  <AiFillWallet fontSize={30} color="#CAFF33" />
                </li>
                <li className="my-10 py-10">
                  <RiLuggageDepositFill fontSize={30} color="#CAFF33" />
                </li>
                <li className="my-10 py-10">
                  <FaHotel fontSize={30} color="#CAFF33" />
                </li>

                <li className="my-10 py-10">
                  <AiFillCalculator fontSize={30} color="#CAFF33" />
                </li>
              </ul>
              <ul className="text-center">
                <li className="my-10 py-10">
                  <AiFillProfile fontSize={30} color="#CAFF33" />
                </li>
                <li className="my-10 ">
                  <BiLogOutCircle fontSize={30} color="#CAFF33" />
                </li>
              </ul>
            </div>
          ) : null}

          {!user.isAdmin && (
            <div className="sideNav bg-overlay w-[20%] h-[100vh] pt-2 flex-1 md:block hidden">
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
                <li className="my-10 py-2 flex items-center justify-center">
                  <AiFillHighlight fontSize={25} color="#CAFF33" />
                  <span className="pl-2"> Withdraw </span>
                </li>
                <li className="my-10 py-2 flex items-center justify-center">
                  <AiFillWallet fontSize={30} color="#CAFF33" />
                  <span className="pl-2"> Request Loan</span>
                </li>
                <li className="my-10 py-2 flex items-center justify-center">
                  <RiLuggageDepositFill fontSize={30} color="#CAFF33" />
                  <span className="pl-2"> Deposit </span>
                </li>
                <li className="my-10 py-2 flex items-center justify-center">
                  <AiFillCalculator fontSize={30} color="#CAFF33" />
                  <span className="pl-2"> Reports</span>
                </li>
                <li className="my-10 py-2 flex items-center justify-center">
                  <FaHotel fontSize={30} color="#CAFF33" />
                  <span className="pl-2">Loans</span>
                </li>
              </ul>
            </div>
          )}

          <div className="wjjj pt-5 md:w-[85%] w-[100%] px-2">
            <div className="flex flex-col h-[80vh] my-10 justify-center items-center ">
              <div className="">
                <h2 className="mx-10 mt-10 text-2xl font-bold text-center py-5">
                  User <span className="text-btn">Details</span>
                </h2>
                <div className="border h-[80vh] w-[80vw] md:w-[30vw]">
                  <div className="box w-[30%] my-5 m-auto ">
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture}
                        alt=""
                        className="rounded-full"
                      />
                    ) : (
                      <img src={micro} alt="" className=" rounded-full" />
                    )}
                  </div>
                  <div className=" text-center">
                    <h2 className="font-bold my-10">
                      First Name:
                      <span className=" font-normal"> {user.firstName}</span>
                    </h2>
                    <h2 className="font-bold my-10">
                      Last Name:
                      <span className=" font-normal"> {user.lastName}</span>
                    </h2>
                    <h2 className="font-bold my-10">
                      First Name:
                      <span className=" font-normal"> {user.Gender}</span>
                    </h2>
                    <h2 className="font-bold my-10">
                      Email:
                      <span className=" font-normal"> {user.Email}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
