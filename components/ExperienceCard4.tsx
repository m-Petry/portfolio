/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { FcDocument } from "react-icons/fc";
import { MdGroups } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscMortarBoard } from "react-icons/vsc";

type Props = {};

function ExperienceCard2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[340px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white w-32 h-32 rounded-full object-cover object-center"
        src="../logosExperience/ifrs-logo.png"
        alt="rs-logo"
      />

      <div className="text-center">
        <h4 className="text-4xl font-light">Professional Education Teacher</h4>
        <p className="font-bold text-1xl mt-1">
          Federal Institute of Rio Grande do Sul
        </p>
        <p className="font-bold text-1xl mt-1">Federal Government of Brazil</p>
        <div className="flex space-x-2 my-2 justify-center">
          <FaChalkboardTeacher className="h-6 w-6  text-slate-400" />
          <FcDocument className="h-6 w-6" />
          <MdGroups className="h-6 w-6 text-amber-600" />
          <VscMortarBoard className="h-6 w-6 text-yellow-400" />
        </div>
        <p className="text-base py-2 text-gray-300">Jan 2013 - Dec 2013</p>

        <ul className="text-left list-disc space-y-4 pr-5 ml-5 mt-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black/70 scrollbar-thumb-[#F7AB0A]/80 w-full">
          <li>• Teaching in the area of natural resources for 1 year;</li>
          <li>• Developing curricula and delivering course material;</li>
          <li>
            • Publishing research, attending conferences, delivering
            presentations, and networking with others in the field;
          </li>
          <li>
            • Participating in committee, departmental, and school meetings;
          </li>
          <li>
            • Contributing to the creation of an environment that promotes
            growth, equality, and freedom of speech;
          </li>
          <li>
            • Contributing to the creation of an environment that promotes
            growth, equality, and freedom of speech;
          </li>
          <li>
            • Reviewing methods and teaching materials and making
            recommendations for improvement.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard2;
