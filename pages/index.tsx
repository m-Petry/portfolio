import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import { ContactMe } from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { FaChevronUp } from "react-icons/fa";
import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(22,22,22)] text-[rgb(247,241,241)] snap-y snap-mandatory overflow-hidden scrollbar">
      <Head>
        <title>Marcelo Petry Portfolio - Web Developer</title>
        <meta
          name="description"
          content="Web Developer Marcelo Petry Portfolio Website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section id="header">
        <Header socials={socials} />
      </section>
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
        <WorkExperience experiences={experiences} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#header">
        <footer className="sticky w-full cursor-pointer bottom-5 animate-fade-in-up">
          <div className="flex items-center justify-center">
            <button>
              <FaChevronUp />
            </button>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    // Next.js will atempt to regenerate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10
  };
};
