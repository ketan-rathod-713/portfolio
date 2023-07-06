import React from "react";
import ProjectCard from "../components/project-card/ProjectCard";
import BlogCard from "../components/blog-card/BlogCard";
import Contact from "../components/contact/Contact";
import { projects, blogs, about, educationData, LIGHT, DARK } from "../app/constants";
import IntroSection from "../components/intro-section/IntroSection";
import EducationCard from "../components/project-card/EducationCard";
import { useSelector } from "react-redux";
import { selectMode } from "../features/theme/themeSlice";
import SubHeading from "../components/utils/SubHeading";


const HomePage = () => {
  const mode = useSelector(selectMode);

  return (
    <div className="bg-navy pt-10 pl-6 pb-10 lg:grid lg:grid-cols-2 lg:pt-10 lg:pl-10 lg:pb-6 lg:h-full overflow-y-scroll">
      

      <IntroSection></IntroSection>

{/* all sections grid */}
      <div className="mt-24 lg:mt-0 pr-4 text-[1rem] lg:col-span-1 lg:pl-10 lg:h-full lg:overflow-y-auto">
{/* about section */}
        <div className={` ${mode === LIGHT && "bg-onPrimary"}  ${mode === DARK && "text-darkPrimary"}`}>
          <SubHeading>About</SubHeading>
          <div className="flex flex-col space-y-3">
            {about.map((text) => (
              <p className="text-gray-600">{text}</p>
            ))}
          </div>
        </div>

        {/* experience */}
        {/* <div className="mt-24 text-[1.2rem]">
          <h3 className="font-bold text-[1.3rem] mb-3 capitalize text-blue-700">
            experience
          </h3>
          <div className="flex flex-col space-y-12">
            {experiences.map((experience) => (
              <ExperienceCard experience={experience}></ExperienceCard>
            ))}
          </div>
        </div> */}

        {/* Education */}
        <div className={`mt-24 text-[1.2rem]`}>
          <SubHeading>Education</SubHeading>
          <div className={`flex flex-col space-y-12`}>
            {educationData.map((education) => (
              <div className={`flex flex-col space-y-12 ${mode === LIGHT &&  "bg-onPrimary transition-all hover:bg-primaryContainer duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"}  ${mode === DARK && "text-darkPrimary hover:bg-onPrimaryContainer duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"}`}>
              <EducationCard education={education}></EducationCard>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-24 text-[1.2rem]">
          <SubHeading>Projects</SubHeading>
          <div className="flex flex-col space-y-16">
            {projects.map((project) => (
              <div className={`flex flex-col space-y-12 ${mode === LIGHT &&  "bg-onPrimary  transition-all hover:bg-primaryContainer duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"}  ${mode === DARK && "text-darkPrimary hover:bg-onPrimaryContainer duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"}`}>
              <ProjectCard project={project}></ProjectCard>
              </div>
            ))}
          </div>
        </div>
        
        {/* Writtings */}
        {/* <div className="mt-24 text-[1.2rem]">
          <SubHeading>Writtings</SubHeading>
          <div className="flex flex-col space-y-16">
            {blogs.map((blog) => (
              <div className={`flex flex-col space-y-12 ${mode === LIGHT &&  "bg-onPrimary  transition-all hover:bg-primaryContainer duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"}  ${mode === DARK && "text-darkPrimary hover:bg-onPrimaryContainer duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"}`}>
              <BlogCard blog={blog}></BlogCard>
              </div>
            ))}
          </div>
        </div> */}


        {/* contact */}

        <Contact></Contact>

      </div>
    </div>
  );
};

export default HomePage;
