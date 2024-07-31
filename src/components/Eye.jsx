import React, { useEffect, useState } from "react";

const Eye = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);
  return (
    <>
      <div className=" flex items-center justify-center w-[30vw] h-[30vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-white">
        <div className=" w-2/3 h-2/3 rounded-full bg-black relative">
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            className="line w-full h-7  flex items-center  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
          >
            <div className=" w-6 h-6 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eye;
