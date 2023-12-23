import React from "react";
import { data } from "./data";

import { RiTwitterXFill, RiWhatsappFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const MNav = () => {
  const isUserLogin = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Successfully Logout");
    navigate("/signin");
  };

  return (
    <div className="bottom-0 fixed shadow-lg w-full md:hidden py-2 left-0 bg-background h-[50vh] ">
      <ul className="flex items-center justify-evenly text-sm mt-5">
        {data.map((data) => (
          <li className="hover:text-btn" key={data.name}>
            <Link to={data.link}>{data.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center mt-10">
        {isUserLogin ? (
          <>
            <button className="mr-3 bg-btn text-background px-5 py-2 rounded-full flex items-center">
              <Link to={"/dashboard"}> Dashboard</Link>
            </button>

            <button className="mmr-3 flex items-center">
              <Link to={"/profile"}> Profile</Link>
            </button>

            <button
              className="ml-3 bg-btn text-background px-5 py-2 rounded-full flex items-center "
              onClick={handleLogout}
            >
              <li>Signout</li>
            </button>
          </>
        ) : (
          <>
            <button className="mr-3">
              {" "}
              <Link to={"/signup"}> Signup</Link>
            </button>
            <button className="ml-3 bg-btn text-background px-5 py-2 rounded-full">
              <Link to={"/signin"}> Login</Link>
            </button>
          </>
        )}
      </ul>

      <ul className="flex items-center justify-center mt-10">
        <div className="px-7 py-5">
          <RiTwitterXFill fontSize={20} />
        </div>
        <div className="px-7 py-5">
          <BsFacebook fontSize={20} color="#326B9E" />
        </div>
        <div className="px-7 py-5">
          <RiWhatsappFill fontSize={20} />
        </div>
      </ul>
    </div>
  );
};

export default MNav;
