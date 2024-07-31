import React from "react";

function Cards() {
  return (
    <div className="w-full my-40 flex gap-5 px-10">
      <div className=" relative w-1/2 h-[21rem] bg-[#004D42] rounded-lg flex items-center justify-center">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <button className=" border-2 text-white rounded-full px-2 absolute left-2 bottom-2">
          &copy; 2019 - 2024
        </button>
      </div>
      <div className="w-1/2 h-[21rem] flex gap-5">
        <div className="w-1/2 h-full bg-[#212121] rounded-lg relative flex items-center justify-center">
          {" "}
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" border-2 text-white rounded-full px-2 absolute left-2 bottom-2">
            &copy; 2019 - 2024
          </button>
        </div>
        <div className="w-1/2 h-full bg-[#212121] rounded-lg relative flex items-center justify-center">
          {" "}
          <img
            className="w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" border-2 text-white rounded-full px-2 absolute left-2 bottom-2">
            &copy; 2019 - 2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
