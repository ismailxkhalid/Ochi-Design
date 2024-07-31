import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

function About() {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-scroll
      data-secton
      data-scroll-speed="0.1111"
      className=" bg-[#CEEA67] rounded-3xl p-3 pt-10 lg:pt-0 lg:p-12 -top-5  relative "
    >
      <div>
        <h1 className="text-[9vw] lg:text-[4vw] lg:font-['Neue_Montreal'] w-full leading-[9vw] lg:leading-[4.5vw] font-light  lg:font-normal">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>

      <div className="w-full border-t border-[#83934b] mt-12 mb-3"></div>
      <div className="lg:grid lg:grid-cols-12 gap-4 font-extralight lg:font-light ">
        <p className="lg:col-span-6 mb-6 lg:mb-0">What you can expect:</p>
        <div className=" lg:col-span-3  leading-2">
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether it's live or digital, delivered for one
          or a hundred people.
          <div className="pt-10">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </div>
        </div>
        <div className=" lg:col-span-2 lg:pl-[50%] lg:pt-16 pt-10 underline">
          <p className="pb-4">S:</p>
          <ul>Instagram</ul>
          <ul>Behance</ul>
          <ul>Facebook</ul>
          <ul>Linkedin</ul>
        </div>
      </div>
      <div className="w-full border-t border-[#83934b] mt-24 mb-3"></div>
      <div className="lg:flex">
        <div className=" lg:w-1/2">
          <p className=" ml-3 text-[7vw] lg:text-[4vw] lg:font-['Neue_Montreal'] mb-2 lg:mb-0 font-light">
            Our approach:
          </p>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className=" bg-black py-3 lg:py-4 px-4 ml-2 mb-8 text-white w-[38vw] lg:w-[13vw] rounded-full flex items-center gap-8"
          >
            <h1 className="uppercase font-extralight ">Read More</h1>
            <div
              className={`
              p-1 bg-white rounded-full w-2  ${
                hover
                  ? "transform transition-transform scale-[500%] duration-500 "
                  : "transform transition-transform scale-100 duration-500"
              }`}
            ></div>
          </div>
        </div>
        <div
          className={`lg:w-1/2 w-full  lg:h-[59vh]  rounded-xl overflow-hidden`}
        >
          <div
            className={`${
              hover
                ? "card w-full h-full rounded-xl relative overflow-hidden bg-cover bg-no-repeat flex items-center justify-center transform transition-transform  scale-90 duration-[1500ms] "
                : "card w-full h-full   rounded-xl relative overflow-hidden bg-cover bg-no-repeat flex items-center justify-center transform transition-transform scale-95 duration-[1500ms] "
            }`}
          >
            <img
              className={` ${
                hover
                  ? "w-full h-full bg-cover object-cover transition duration-[2000ms] ease-in-out scale-125"
                  : "w-full h-full bg-cover object-cover transition duration-[1500ms] ease-in-out scale-110"
              }`}
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
