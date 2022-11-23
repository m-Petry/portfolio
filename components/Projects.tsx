/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center px-10 z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] indent-5 text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full p-10 md:p-0 max-w-5xl flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen max-w-5xl"
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="webapps on all responsive devices"
              className="rounded-lg"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-5 w-5"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="technologies-logos"
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
