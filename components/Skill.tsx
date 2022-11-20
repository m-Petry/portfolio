import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" }
        }}
        whileInView={{ opacity: 1 }}
        src="../logosSkill/react-2.svg"
        className="rounded-full object-cover h-20 w-20 md:h-28 md:w-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-28 md:w-28 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">React</p>
          <p className="text-2xl font-bold text-black opacity-100">75%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
