import React from "react";
import Badge from "../utils/Badge";

const ProjectCard = ({ project }) => {
  console.log(project);

  return (
    <>
      <div className="flex flex-col hover:bg-green-400 p-4 rounded-md cursor-pointer transition-all">
        <div className="md:grid md:grid-cols-10">
          <div className="md:col-span-6 md:order-2">
            <a className=" font-bold text-gray-900" href="url">{project.title}</a>
            {/* <h3 className="text-[1.1rem]">Senior Engineer</h3> */}
            <p className="text-[1rem] mt-2 text-gray-600">{project.about}</p>

          <div className="flex flex-wrap">
          {project.badges.map((badge) => (
            <Badge>{badge}</Badge>
          ))}
        </div>
          </div>

          <div className="mt-3 md:mt-0 flex flex-wrap md:col-span-4 md:order-1 sm:justify-center">
            <img
              src="https://picsum.photos/200/300"
              className="mr-3 mt-3 w-[19rem] h-[9rem] object-cover rounded-md"
              alt=""
              
            />
            {/* <img src="https://picsum.photos/200/300" className="mr-3 mt-3 w-[19rem] h-[9rem] object-cover" alt="" /> */}
          </div>
        </div>

        
      </div>
    </>
  );
};

export default ProjectCard;
