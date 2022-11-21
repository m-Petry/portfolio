import Link from "next/link";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { FaChevronUp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[rgb(22,22,22)] text-[rgb(247,241,241)] snap-y snap-mandatory overflow-hidden scrollbar">
      <Head>
        <title>m-Petry Portfolio</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer animate-fade-in-up">
          <div className="flex items-center justify-center">
            <button>
              <FaChevronUp />
            </button>
          </div>
        </footer>
      </Link>
    </div>
  );
}
