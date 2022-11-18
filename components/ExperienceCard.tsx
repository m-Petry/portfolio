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
// import { BsServer } from "react-icons/bs";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]">
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
        <h4 className="text-4xl font-light">IT Operations Assistant</h4>
        <p className="font-bold text-2xl mt-1">Conab</p>
        <div className="flex space-x-2 my-2">
          <FcCustomerSupport className="h-6 w-6" />
          <AiFillWindows className="h-6 w-6 text-blue-400" />
          <FcLinux className="h-6 w-6" />
          <FaNetworkWired className="h-6 w-6 text-slate-400" />
          <FcDataConfiguration className="h-6 w-6" />
          <FcElectronics className="h-6 w-6" />
        </div>
        <p className="text-base py-5 text-gray-300">Oct/2020 - Nov/2022</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
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
