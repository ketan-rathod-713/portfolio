import React from "react";
import Badge from "../components/utils/Badge";
import Links from "../components/utils/Links";
import Icon from "../components/utils/Icon";
import ExperienceCard from "../components/project-card/ExperienceCard";
import ProjectCard from "../components/project-card/ProjectCard";
import BlogCard from "../components/blog-card/BlogCard";

const profile = {
  name: "Ketan Rathod",
  role: "4th Year Student At VGEC Ahmedabad",
  about:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam debitis possimus hic modi, pariatur nesciunt voluptatem sit. Atque, obcaecati sed voluptate rem laboriosam iste cupiditate ut veritatis consectetur ipsum!",
  socialLinks: [
    {
      title: "github",
      url: "url",
    },
    {
      title: "Linkedin",
      url: "url",
    },
    {
      title: "Instagram",
      url: "url",
    },
    {
      title: "Twitter",
      url: "url",
    },
  ],
};

const experiences = [
  {
    time: "2018 - Present",
    role: "Lead Engineer - Upstatement",
    link: "link",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    referencesLinks: [
      {
        title: "Android App",
        url: "ulr",
      },
      {
        title: "Screen Time 2.0",
        url: "ulr",
      },
    ],
    badges: ["Java", "Typescript", "Others", "html"],
  },
  {
    time: "2018 - Present",
    role: "Lead Engineer - Upstatement",
    link: "link",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    referencesLinks: [],
    badges: ["Java", "Typescript", "Others", "html"],
  },
];

const projects = [
  {
    title: "Lorem ipsum dolor sit amet.",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, modi at aut sint, et nulla quae temporibus, optio veniam voluptatibus voluptate magnam porro! Soluta facilis dolor deserunt obcaecati nisi unde.",
    thumbnailImage: "https://via.placeholder.com/720x960?",
    github: "url",
    websiteUrl: "",
    badges: ["React", "Express", "Spotify Api"],
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, modi at aut sint, et nulla quae temporibus, optio veniam voluptatibus voluptate magnam porro! Soluta facilis dolor deserunt obcaecati nisi unde. ribus, optio veniam voluptatibus voluptate magnam porro! Soluta facilis dolor deserunt obcaecati nisi unde. ",
    thumbnailImage: "https://via.placeholder.com/720x960?",
    github: "url",
    websiteUrl: "",
    badges: ["React", "Express", "Spotify Api","React", "Express", "Spotify Api"],
  },
];

const about = [
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, enim consequuntur ipsam sunt deserunt ullam aperiam placeat perspiciatis magnam!",
  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit perspiciatis molestias quidem quam veritatis sunt soluta nihil ratione, cum similique labore pariatur, illo consequuntur!",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, repudiandae.",
];

const blogs = [
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat!",
        year: "2023",
        month: "07",
        date: "11",
        url: "url",
        imgUrl: "url"
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat!",
        year: "2023",
        month: "07",
        date: "11",
        url: "url",
        imgUrl: "url"
    },
]

const HomePage = () => {
  return (
    <div className="bg-navy pt-10 pl-6 pr-6 pb-10 lg:grid lg:grid-cols-2 lg:pt-10 lg:pl-10 lg:pb-6 lg:h-full overflow-y-scroll">

      <div className="flex flex-col lg:col-span-1 lg:h-full lg:justify-between">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-left text-blue-700">{profile.name}</h1>
          <h2 className="text-2xl font-bold text-blue-300">{profile.role}</h2>
          <p className="text-[1.1rem]  text-blue-950">{profile.about}</p>
        </div>

        

        <ul className="flex flex-wrap">
          {profile.socialLinks.map((icon) => (
            <Icon url={icon.url}>{icon.title}</Icon>
          ))}
        </ul>
      </div>

      <div className="text-[1rem] lg:col-span-1 lg:pl-10 lg:h-full lg:overflow-y-auto">
        <div className="mt-24">
          <h3 className="font-bold text-[1.3rem] mb-3 text-blue-700">ABOUT</h3>
          <div className="flex flex-col space-y-3">
            {about.map((text) => (
              <p className="text-gray-600">{text}</p>
            ))}
          </div>
        </div>

        {/* experience */}
        <div className="mt-24 text-[1.2rem]">
          <h3 className="font-bold text-[1.3rem] mb-3 capitalize text-blue-700">
            experience
          </h3>
          <div className="flex flex-col space-y-12">
            {experiences.map((experience) => (
              <ExperienceCard experience={experience}></ExperienceCard>
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
      </div>
    </div>
  );
};

export default HomePage;
