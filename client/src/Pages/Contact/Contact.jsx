import React, { useState } from "react";
import Navbar from "../../Components/Nav/Navbar";
import Heading from "../../Components/Heading";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col justify-center m-auto text-center items-center mb-10">
        <form
          className="form md:ml-10 flex-1 border p-5 text-left w-[]"
          onSubmit={handleForm}
        >
          <div className="my-5">
            <Heading
              name={
                <>
                  Contact <span className="text-btn">Us</span>
                </>
              }
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="name" className=" py-2 font-bold">
              Name
            </label>
            <input
              type="text"
              placeholder="enter your name"
              className=" py-3 w-[70vw] md:w-[60vw] p-2 text-background"
              onChange={(e) => {
                setName(e.target.value);

                console.log(name);
              }}
              value={name}
            />
          </div>
          <div className="flex flex-col my-5">
            <label htmlFor="name" className="py-2 font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder=""
              className=" py-3 w-[70vw] md:w-[60vw] p-2 text-background"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
              value={email}
            />
          </div>
          <div className="flex flex-col my-5">
            <label htmlFor="name" className="py-2 font-bold">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="text-background"
              onSubmit={(e) => {
                setMessage(e.target.value);
                console.log(message);
              }}
            ></textarea>
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
      <Footer />
    </div>
  );
};

export default Contact;
