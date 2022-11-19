/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.9 }}
      className="h-screen flex-col relative text-center md:text-top md:flex max-w-7xl px-10 justify-evenly mx-auto items-center my-5 inline-flex"
    >
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="items-center md:flex md:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="../aboutimg.png"
          className="inline-flex object-top md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-95 md:h-95 xl:w-[400px] xl:h-[600px] mt-14 flex-shrink-0"
        />

        <div className="md:my-10 px-0 md:px-10 max-w-xl">
          <h4 className="mb-5 mt-5 text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base text-justify">
            I worked in public administration for over 10 years, of which 5
            years I worked as a substitute manager and assistant in
            administrative routines of large budget projects in the social area
            of the Ministry of Agriculture - PAA, Fome Zero, PGPM - using ERP
            software for managing teams and resources.
          </p>
          <p className="text-base text-justify">
            I have been working as an operations assistant in the IT
            infrastructure technical support area for two years, which covers
            physical and logical infrastructure of networks and servers,
            desktops, switches, installations and operating systems.
          </p>
          <p className="text-base text-justify">
            For at least one year I've been studying and building web
            development projects, which include React, JavaScript, HTML, CSS and
            several related libraries.
          </p>
          <p className="text-base text-justify">
            Also, I maintain the purpose of providing the best service to
            customers and their needs, as well as valuing a humanistic work
            method focused on people's well-being.
          </p>
          <p className="text-base text-justify">
            My work profile is centered around agile methods, teamwork,
            effective communication, initiative, attention to detail and a
            constant willingness to learn.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
