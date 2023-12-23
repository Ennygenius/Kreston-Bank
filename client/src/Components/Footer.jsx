import React from "react";
import s2 from "../assets/s2.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsWhatsapp, BsX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="px-10 py-10 border border-overlay ">
      <div className="nav__logo flex items-center">
        <img src={s2} alt="" />
        <p className=" md:text-3xl ml-2 font-bold">KRESTON BANK</p>
      </div>
      <div className="grid md:grid-cols-3 items-center ">
        <div className="links my-10">
          <ul>
            <h2 className="text-2xl mb-2 font-bold">QUICK LINKS</h2>
            <li className="py-5">About</li>
            <li className="py-5">Services</li>
            <li className="pt-5">Contact</li>
          </ul>
        </div>
        <div className=""></div>
        {/* <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            ut.
          </p>
        </div> */}
        <div className="md:text-left text-center">
          <h2 className="font-bold text-2xl pb-5 text-btn  mt-5 ">
            Get in touch with us{" "}
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            esse?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cumque eos dicta accusamus in hic voluptatum a blanditiis, quasi
            repudiandae consequuntur magni eveniet!
          </p>
          <div className="flex md:justify-start justify-center my-2 mt-5 ">
            <BsFacebook fontSize={20} color="" />
            <BsWhatsapp fontSize={20} className="mx-5" />
            <BsTwitter fontSize={20} />
          </div>
          <p className="py-5">
            <a href="" className="text-btn underline">
              inuenike@gmail.com
            </a>
          </p>
        </div>
      </div>{" "}
      <p className="text-center mt-5">
        Copyright @ 2023 Kreston Bank | Design and Developed by{" "}
        <Link
          to={"https://inu-george.netlify.com"}
          className="underline text-btn"
        >
          Chief George
        </Link>{" "}
      </p>
    </div>
  );
};

export default Footer;
