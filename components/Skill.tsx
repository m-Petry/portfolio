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
        className="rounded-full border border-gray-500 object-cover h-20 w-20"
      />
    </div>
  );
}

export default Skill;
