import React, { useContext, useState } from "react";
import ms from "../../assets/microsoft-.jpg";
import Heading from "../../Components/Heading";
import axios from "axios";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE } from "../../Hooks/axios/axios";

const Signin = () => {
  const { setUser } = useContext(AuthContext);
  const URI = "/users/login";
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await BASE.post(URI, {
        Email,
        Password,
      });

      const { token, message, successMessage } = response?.data;

      setUser({ Email, Password, token });

      localStorage.setItem("token", token);
      const getToken = localStorage.getItem("token");
      console.log(getToken);

      if (message) {
        setMessage(message);
        toast(message);
      } else if (successMessage === "Admin Login") {
        alert("Admin Logged IN");
        navigate(`/AdminDashboard`);
        window.location.reload();
      } else {
        navigate(`/dashboard`);
        window.location.reload();
        alert("Logged in Successfully");
      }
    } catch (error) {
      alert("User creation failed. Please check your input data.");
    }
  };

  return (
    <div>
      <div className=" flex items-center flex-col md:justify-center">
        <Heading
          name={
            <div className=" mb-10 flex items-center my-10">
              <AiOutlineUser color="#CAFF33" />
              <h2>
                Login <span className="text-btn"> Page</span>
              </h2>
            </div>
          }
        />

        <div className="flex md:flex-row flex-col justify-between border border-overlay md:shadow-lg p-3 md:p-5 ">
          <div className="img hidden md:block w-[60%]">
            <img src={ms} alt="" className="" />
          </div>
          <form className="form md:ml-10 flex-1" onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Email:
              </label>
              <input
                type="email"
                value={Email}
                placeholder="enter your name"
                className=" py-2 w-full p-2 text-background"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Password:
              </label>
              <input
                type="password"
                value={Password}
                placeholder=""
                className=" py-2 px-10 w-full text-background"
                onChange={(e) => {
                  setPassword(e.target.value);
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
            <p className="py-5">
              Don't have an account{" "}
              <Link to={"/signup"} className=" text-btn font-bold">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
