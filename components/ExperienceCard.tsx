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

type Props = {};

function ExperienceCard({}: Props) {
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
        src="../logosExperience/conab-logo-vert.jpg"
        alt="conab-logo"
      />

      <div className="text-center">
        <h4 className="text-4xl font-light">IT Operations Assistant</h4>
        <p className="font-bold text-1xl mt-1">
          Conab - Companhia Nacional de Abastecimento
        </p>
        <p className="text-1xl mt-1">
          Ministry of Agriculture, Livestock and Food Supply
        </p>
        <p className="text-1xl mt-1">Federal Government of Brazil</p>
        <div className="flex space-x-2 my-2 justify-center">
          <FcCustomerSupport className="h-6 w-6" />
          <AiFillWindows className="h-6 w-6 text-blue-400" />
          <FcLinux className="h-6 w-6" />
          <FaNetworkWired className="h-6 w-6 text-slate-400" />
          <FcDataConfiguration className="h-6 w-6" />
          <FcElectronics className="h-6 w-6" />
        </div>
        <p className="text-base py-2 text-gray-300">Oct/2020 - Nov/2022</p>

        <ul className="text-left list-disc space-y-4 ml-5 text-lg">
          <li>Summary point </li>
          <li>Summary point </li>
          <li>Summary point </li>
          <li>Summary point </li>
          <li>Summary point </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
