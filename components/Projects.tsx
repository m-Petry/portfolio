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
    <div className="relative z-0 flex flex-col items-center h-screen max-w-full px-10 overflow-hidden text-left md:flex-row justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] indent-5 text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full p-10 md:p-0 max-w-5xl flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen max-w-5xl p-10 space-y-5 snap-center md:p-44"
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
            <div className="max-w-6xl px-0 space-y-10 md:px-10 ">
              <h4 className="text-2xl font-semibold text-center md:text-4xl">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((technology) => (
                  <img
                    className="w-5 h-5"
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

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
