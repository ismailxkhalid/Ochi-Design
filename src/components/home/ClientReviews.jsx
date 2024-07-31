import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="">
      <div className=" w-full">
        <Link
          heading="BLACK BOX"
          subheading="Learn what we do here"
          imgSrc="https://ochi.design/wp-content/uploads/2022/05/BB_WEB_4.jpg"
          href="https://blackbookapp.co/"
        />
        <Link
          heading="PREMIUM BLEND"
          subheading="We work with great people"
          imgSrc="https://ochi.design/wp-content/uploads/2022/12/PB5-2-scaled.jpg"
          href="https://www.premium-blend.com/"
        />
        <Link
          heading="OFFICEVIBE"
          subheading="Our work speaks for itself"
          imgSrc="https://ochi.design/wp-content/uploads/2022/05/Workiz_12.jpg"
          href="https://workleap.com/officevibe/"
        />
        <Link
          heading="PLANETLY"
          subheading="We want cool people"
          imgSrc="https://ochi.design/wp-content/uploads/2022/05/Planetly_1.jpg"
          href="https://www.onetrust.com/solutions/esg-and-sustainability-cloud/"
        />
        <Link
          heading="WORKIZ EASY"
          subheading="Incase you're bored"
          imgSrc="https://ochi.design/wp-content/uploads/2022/05/Workiz_3-scaled.jpg"
          href="https://www.workiz.com/"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      target="_blank"
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative mx-10 flex items-center justify-between border-b-[1px] border-neutral-300  transition-colors duration-500 hover:border-neutral-500"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block font-rubik transition-colors duration-500 group-hover:text-neutral-500 md:text-2xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-gray-500 transition-colors duration-500 group-hover:text-neutral-300">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl " />
      </motion.div>
    </motion.a>
  );
};

export default HoverImageLinks;
