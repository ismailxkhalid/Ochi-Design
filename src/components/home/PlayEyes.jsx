import React, { useEffect, useState } from "react";
import Eye from "../Eye";

function PlayEyes() {
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
    <div className="eyes w-full h-[40vh] lg:h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center relative"
      >
        <div
          className="absolute  top-1/2 left-1/2 -translate-x-[50%]
        -translate-y-[50%] flex items-center gap-10"
        >
          <Eye />
          <Eye />
        </div>
      </div>
    </div>
  );
}

export default PlayEyes;
