import React from "react";
import ProjectCard from "../components/project-card/ProjectCard";
import BlogCard from "../components/blog-card/BlogCard";
import Contact from "../components/contact/Contact";
import { projects, blogs, about, educationData } from "../app/constants";
import IntroSection from "../components/intro-section/IntroSection";
import EducationCard from "../components/project-card/EducationCard";


const HomePage = () => {


  return (
    <div className="bg-navy pt-10 pl-6 pr-6 pb-10 lg:grid lg:grid-cols-2 lg:pt-10 lg:pl-10 lg:pb-6 lg:h-full overflow-y-scroll">
      

      <IntroSection></IntroSection>

      <div className="mt-24 lg:mt-0 text-[1rem] lg:col-span-1 lg:pl-10 lg:h-full lg:overflow-y-auto">
        <div className="">
          <h3 className="font-bold text-[1.3rem] mb-3 text-blue-700">ABOUT</h3>
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
        <div className="mt-24 text-[1.2rem]">
          <h3 className="font-bold text-[1.3rem] mb-3 capitalize text-blue-700">
            education
          </h3>
          <div className="flex flex-col space-y-12">
            {educationData.map((education) => (
              <EducationCard education={education}></EducationCard>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-24 text-[1.2rem]">
          <h3 className="font-bold text-[1.3rem] mb-3 capitalize text-blue-700">projects</h3>
          <div className="flex flex-col space-y-16">
            {projects.map((project) => (
              <ProjectCard project={project}></ProjectCard>
            ))}
          </div>
        </div>
        
        {/* Writtings */}
        <div className="mt-24 text-[1.2rem]">
          <h3 className="font-bold text-[1.3rem] mb-3 capitalize text-blue-700">Writtings</h3>
          <div className="flex flex-col space-y-16">
            {blogs.map((blog) => (
              <BlogCard blog={blog}></BlogCard>
            ))}
          </div>
        </div>


        {/* contact */}

        <Contact></Contact>

      </div>
    </div>
  );
};

export default HomePage;
