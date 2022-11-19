import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="top-0 mt-80 flex flex-col relative text-center max-w-[2000px] xl:px-10  justify-center mx-14 items-center">
      <h3 className="uppercase tracking-[20px] indent-5 text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="mt-20 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 justify-items-center my-8 gap-6 lg:gap-8 rounded-full">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
