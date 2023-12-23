import React, { useState } from "react";
import ms from "../../assets/microsoft-.jpg";
import Heading from "../../Components/Heading";
import axios from "axios";
import { BASE } from "../../Hooks/axios/axios";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const URI = "/users";
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [Gender, setGender] = useState([]);
  const [message, setMessage] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("Email", Email);
    formData.append("Password", Password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("Gender", Gender);
    formData.append("file", profilePicture);

    const fetchUser = await BASE.post(URI, formData);
    console.log(fetchUser);

    if (fetchUser.data.message) {
      setMessage(fetchUser.data.message);
      toast(fetchUser.data.message);
    } else {
      alert("Registration Successfull");
      navigate("/signin");
    }
  };
  const handleFileChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setProfilePicture(file);
  };

  return (
    <div>
      <div className=" flex items-center flex-col md:justify-center">
        <Heading
          name={
            <div className=" mb-10 flex items-center my-10">
              <AiOutlineUser color="#CAFF33" />
              <h2>
                Register <span className="text-btn"> Page</span>
              </h2>
            </div>
          }
        />

        <div className="flex md:flex-row flex-col justify-between border border-overlay md:shadow-lg p-3 md:p-5 ">
          <div className="img hidden md:block w-[60%]">
            <img src={ms} alt="" className="" />
          </div>
          <form
            className="form md:ml-10 flex-1"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <ToastContainer />
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                First Name:
              </label>
              <input
                type="text"
                required
                value={firstName}
                placeholder="enter your name"
                className=" py-2 w-full p-2 text-background"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Last Name:
              </label>
              <input
                type="text"
                value={lastName}
                placeholder="enter your name"
                className=" py-2 w-full p-2 text-background"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Email:
              </label>
              <input
                type="email"
                required
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
                required
                value={Password}
                placeholder=""
                className=" py-2 px-10 w-full text-background"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Repeat Password:
              </label>
              <input
                value={confirmPassword}
                required
                type="password"
                placeholder=""
                className=" py-2 w-full p-2 text-background"
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Image
              </label>
              <input
                type="file"
                required
                name="file"
                placeholder=""
                className=" py-2 w-full p-2 text-background"
                onChange={handleFileChange}
              />
            </div>
            <img src={profilePicture} alt="" />
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="py-2 font-bold">
                Gender:
              </label>
              <select
                name="select"
                required
                id=""
                className=" py-2 w-full p-2 text-background"
                value={Gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <p>
                You selected <span className="text-btn">{Gender}</span>
              </p>
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
              Already having an account{" "}
              <Link to={"/signin"} className=" text-btn font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
