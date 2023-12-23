import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Nav/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Users from "./Users";
import Transaction from "./Transaction";
import { AuthContext } from "../../Hooks/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // useEffect(() => []);
  return (
    <div>
      <div className="">
        <Navbar />
        <div className=" ml-10 my-10">
          <p>
            Welcome Back: <span className="text-btn">{user.firstName}</span>{" "}
          </p>
        </div>
        <Users />
        <div className="">
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
