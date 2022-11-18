/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="../logosExperience/conab-logo-vert.jpg"
        alt="conab-logo"
      />

      <div>
        <h4>IT Operations Assistant</h4>
        <p>Conab</p>
        <div>
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p>Started work... - Ended...</p>

        <ul>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
