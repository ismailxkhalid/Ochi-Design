import React from "react";
import { useState } from "react";
import { Example } from "./ImageTrail";
import { motion } from "framer-motion";

function Landing() {
  const tool = "IK.";
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="w-full">
        <Example />
      </div>

      <a href="https://ismailkhalid.netlify.app/">
        <div
          className=" animate-pulse absolute top-[25%] right-0  bg-[#E73C37]  text-white pt-1 pb-2 flex  flex-col items-center justify-normal cursor-pointer hover:bg-red-400  
          LG-STARTED lg:animate-pulse lg:absolute lg:top-[25%] lg:right-0 lg:bg-[#E73C37] lg:text-white lg:pt-1 lg:pb-5 lg:flex lg:flex-col lg:items-center lg:justify-normal lg:cursor-pointer lg:hover:bg-red-400
"
        >
          <h1 className=" text-[8px] lg:text-[15px] font-bold mb-2  ">
            {tool}
          </h1>
          <p className=" font-rubik text-[6px] lg:text-[15px] -rotate-90 lg:my-2 my-1">
            ISMAIL
          </p>
          <p className=" font-rubik text-[6px] lg:text-[15px] -rotate-90 lg:my-2 my-1">
            BY
          </p>
          <p className=" font-rubik text-[6px] lg:text-[15px] -rotate-90 lg:my-2 my-1">
            DESIGN
          </p>
        </div>
      </a>
      <hr className=" bg-slate-800 mt-11 lg:mt-0" />

      <div className="w-full lg:flex items-center justify-between  px-11 pt-4 mb-16 lg:mb-[7.1rem]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <h1
            key={index}
            className="font-light  tracking-tight font-['Neue_Montreal'] my-4 lg:my-0"
          >
            {item}
          </h1>
        ))}
        {/* //FIXME: Start a project  */}
        <button className="flex items-centr text-red-500 ">
          Button ⚠️ FIX ME
        </button>
      </div>
    </>
  );
}

export default Landing;
