import React from "react";
import Navbar from "../../Components/Nav/Navbar";
import Aboutus from "../../Components/About";
import Footer from "../../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="my-10 mx-10">
        <Aboutus
          name={
            " Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias atque quisquam consectetur soluta quod qui quis quaerat omnis ullam velit!             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique reiciendis soluta suscipit itaque ratione inventore. Nostrum numquam mollitia modi enim eius. Error, maxime sequi."
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
