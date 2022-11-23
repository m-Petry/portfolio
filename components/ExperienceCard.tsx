/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { AiFillWindows } from "react-icons/ai";
import {
  FcLinux,
  FcDataConfiguration,
  FcCustomerSupport,
  FcElectronics
} from "react-icons/fc";
import { FaNetworkWired } from "react-icons/fa";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[380px] md:w-[600px] lg:w-[900] xl:w-[1000px] snap-center bg-[#292929] py-5 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white w-32 h-32 rounded-full object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="enterprise-logo"
      />
      <div className="px-10">
        <div className="text-center scale-90 md:scale-100">
          <h4 className="text-4xl font-light">IT Operations Assistant</h4>
          <p className="font-bold text-1xl mt-1">
            Conab - Companhia Nacional de Abastecimento
          </p>
          <p className="text-1xl mt-1">
            Ministry of Agriculture, Livestock and Food Supply
          </p>
          <p className="text-1xl mt-1">Federal Government of Brazil</p>
          <div className="flex space-x-2 my-2 justify-center">
            {experience.technologies.map((technology) => (
              <img
                key={technology._id}
                className="h-10 w10 rounded-full"
                src={urlFor(technology.image).url()}
              />
            ))}
          </div>
        </div>
        <p className="text-base py-2 text-gray-300 text-center">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="flex space-x-2 my-2 justify-center">
          <FcCustomerSupport className="h-6 w-6" />
          <AiFillWindows className="h-6 w-6 text-blue-400" />
          <FcLinux className="h-6 w-6" />
          <FaNetworkWired className="h-6 w-6 text-slate-400" />
          <FcDataConfiguration className="h-6 w-6" />
          <FcElectronics className="h-6 w-6" />
        </div>

        <ul className="text-left list-disc space-y-4 pr-5 ml-5 mt-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black/70 scrollbar-thumb-[#F7AB0A]/80">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
