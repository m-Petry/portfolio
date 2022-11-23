/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { FcManager, FcDocument } from "react-icons/fc";
import { FaSearchDollar } from "react-icons/fa";
import { GiBrazilFlag } from "react-icons/gi";

type Props = {};

function ExperienceCard2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[340px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white w-32 h-32 rounded-full object-cover object-center"
        src="../logosExperience/conab-logo-vert.jpg"
        alt="conab-logo"
      />

      <div className="text-center">
        <div className="scale-85 md:scale-100">
          <h4 className="text-4xl font-light">
            Operations Assistant & Substitute Manager
          </h4>
          <p className="font-bold text-1xl mt-1">
            Conab - Companhia Nacional de Abastecimento
          </p>
          <p className="text-1xl mt-1">
            Ministry of Agriculture, Livestock and Food Supply
          </p>
          <p className="text-1xl mt-1">Federal Government of Brazil</p>
          <div className="flex space-x-2 my-2 justify-center">
            <FcManager className="h-6 w-6" />
            <FaSearchDollar className="h-5 w-5 text-slate-400" />
            <GiBrazilFlag className="h-6 w-6 text-yellow-500" />
            <FcDocument className="h-6 w-6" />
          </div>
        </div>
        <p className="text-base py-2 text-gray-300 text-center">
          Nov 03 2014 - Nov 02 2020
        </p>

        <ul className="text-left list-disc space-y-4 pr-5 ml-5 mt-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black/70 scrollbar-thumb-[#F7AB0A]/80">
          <li>
            • Identifying families at risk of hunger {"("}indigenous,
            quilombolas, among others{")"} to allocate the distribution of
            resources;
          </li>
          <li>
            • Organizing logistics for the distribution of public resources
            throughout the state of RS;
          </li>
          <li>
            • Assistance to at least 30 thousand families during this period;
          </li>
          <li>
            • Preparing and executing a resource capacity plan and resource
            schedules;
          </li>
          <li>
            • Allocating resources to projects, including assigning the
            appropriate personnel to job roles within a project;
          </li>
          <li>
            • Addressing resource demands of all departments for the project
            {"'"}s successful delivery.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard2;
