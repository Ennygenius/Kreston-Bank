import React from "react";
import Navbar from "../../Components/Nav/Navbar";
import Header from "./Header";
import Product from "./Product";
import Card from "../../Components/Card";
import About from "../../Components/About";
import Services from "../../Components/Services";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className=" my-16 w-[90%] m-auto " id="top">
        <Header />
        <Product />
        <div className="flex md:flex-row flex-col items-center justify-between">
          <Card
            name={"Checking Accounts"}
            body={`Enjoy easy and convenient access to your funds with our range of
          checking account options. Benefit from features such as online and
          mobile banking, debit cards, and free ATM access.`}
          />

          <Card
            name={"Checking Accounts"}
            body={`Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.`}
          />

          <Card
            name={"Checking Accounts"}
            body={`Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.`}
          />
        </div>
        <div className="my-10">
          <About
            name={
              "Experience a host of powerful features at YourBank, including seamless online banking, secure transacand personalizedfinancial insights, all designed to enhance your banking experienceLorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiasatque quisquam consectetur soluta quod qui quis quaerat omnis ullamvelit!"
            }
          />
        </div>
        <div className="mt-10">
          <Services />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
