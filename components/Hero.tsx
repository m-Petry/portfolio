/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "My goal is to create innovative web apps",
      "MarceloPetry-Web-Developer.jsx",
      "<My work is based on details />"
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className="h-screen flex flex-col space-y-11 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="../status6.JPG"
        alt="marcelo-photo"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 indent-3.5 tracking-[14px]">
          Web Developer
        </h2>
        <h1 className="text-1xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold scroll-px-18">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="md:scale-130 flex flex-row justify-center pt-5">
          <Link href="#about">
            <button className="heroButton px-2">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton px-2">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton px-2">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton px-2">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
