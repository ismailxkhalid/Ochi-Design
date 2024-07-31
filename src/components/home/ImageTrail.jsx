import { motion, useAnimate } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import eyes from "../../assets/eyes.png";

export const Example = () => {
  const [imgWidth, setImgWidth] = useState(10);
  const updateImgWidth = () => {
    if (window.screen.width < 768) {
      setImgWidth(15);
    }
  };

  useEffect(() => {
    updateImgWidth();
  }, []);
  return (
    <MouseImageTrail
      renderImageBuffer={40}
      rotationRange={25}
      images={[
        "https://ismailkhalid.netlify.app/assets/profile-pic.png",
        "https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg",
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
        "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
        "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
        "https://ismailkhalid.netlify.app/assets/profile-pic.png",
        "https://i.pinimg.com/564x/be/bd/f0/bebdf0010fa0f612322bfe9bbe3c747f.jpg",
        "https://i.pinimg.com/564x/b2/e1/f7/b2e1f7fc639d9a96709e972ae0db2e47.jpg",
        "https://ismailkhalid.netlify.app/assets/profile-pic2.png",
        "https://cdn.dribbble.com/userupload/6666887/file/original-97cd5361a023c5ab5e80a40e5ec03004.png?resize=1504x1128",
        "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
      ]}
    >
      <section className=" w-full py-28 bg-white">
        <div className=" pl-8 lg:px-12 ">
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
            <div key={index} className="masker">
              <div className="w-full flex items-end overflow-hidden">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${imgWidth}vw` }}
                    transition={{ ease: [0.5, 1, 0.89, 1], duration: 1 }}
                    className=" overflow-hidden lg:w-[10vw] rounded-lg h-[11vw] lg:h-[5.9vw] relative  lg:-top-1 bg-[#B8D25E] "
                  >
                    <img className=" object-fill" src={eyes} alt="" />
                  </motion.div>
                )}
                <h1 className="uppercase text-[13vw] leading-[.95] font-oswald -tracking-[0.05em] font-[500] lg:text-[7.5vw] lg:leading-[.95] lg:font-oswald lg:-tracking-[0.05em] lg:font-[500] ">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 3 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidde w-[85%]"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-black bg-white object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
