import React, { useContext, useState } from "react";
import s2 from "../../assets/s2.png";
import {
  AiOutlineAlignRight,
  AiOutlineClose,
  AiOutlineSubnode,
  AiOutlineTeam,
} from "react-icons/ai";
import { BiAlignMiddle } from "react-icons/bi";
import MNav from "./MNav";
import { Link, useNavigate } from "react-router-dom";

import { data } from "./data";
import { AuthContext } from "../../Hooks/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const isUserLogin = localStorage.getItem("token");
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
  };

  const NavControl = () => {
    setNav(!nav);
    console.log("clicked");
  };
  return (
    <>
      <div className="flex items-center justify-around my-5 bg-overlay w-full md:w-[90%] m-auto py-5 rounded-full ">
        <Link to={"/"}>
          {" "}
          <div className="nav__logo flex items-center">
            <img src={s2} alt="" />
            <p className=" md:text-3xl ml-2 font-bold">KRESTON BANK</p>
          </div>
        </Link>
        {!isUserLogin && (
          <ul className=" hidden md:flex">
            {data.map((data) => (
              <li
                className="pr-3 md:pr-5 hover:text-btn text-sm"
                key={data.name}
              >
                <Link to={data.link}>{data.name}</Link>
              </li>
            ))}
          </ul>
        )}

        <ul className="hidden md:flex">
          {isUserLogin ? (
            <>
              {!user.isAdmin && (
                <button className="mr-3 bg-btn text-background px-5 py-2 rounded-full flex items-center">
                  <AiOutlineTeam fontSize={25} />
                  <Link to={"/dashboard"}> Dashboard</Link>
                </button>
              )}

              <button className="mmr-3 flex items-center">
                <AiOutlineTeam fontSize={25} />
                <Link to={"/profile"}> Profile</Link>
              </button>

              <button
                className="ml-3 bg-btn text-background px-5 py-2 rounded-full flex items-center "
                onClick={handleLogout}
              >
                <AiOutlineTeam fontSize={25} />
                <li>Signout</li>
              </button>
            </>
          ) : (
            <>
              <button className="mr-3 flex items-center">
                <AiOutlineTeam color="#CAFF33" fontSize={25} />
                <Link to={"/signup"}> Signup</Link>
              </button>{" "}
              <Link to={"/signin"} className="pl-2">
                <button className="ml-3 bg-btn text-background px-5 py-2 rounded-full flex items-center">
                  <AiOutlineSubnode fontSize={25} /> Login
                </button>{" "}
              </Link>
            </>
          )}
        </ul>
        <div
          className="ham block md:hidden cursor-pointer"
          onClick={NavControl}
        >
          {nav ? (
            <div className="">
              <AiOutlineClose fontSize={20} />
            </div>
          ) : (
            <div className="bg-btn px-4 py-2 rounded-full">
              <AiOutlineAlignRight fontSize={20} color="black" />
            </div>
          )}
        </div>
      </div>

      {/* <MNav /> */}
      {nav && <MNav />}
    </>
  );
};

export default Navbar;
