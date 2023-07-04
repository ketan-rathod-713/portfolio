import React from "react";
import { profile } from "../../app/constants";
import Icon from "../utils/Icon";
import { resumeFileId } from "../../app/constants";


const IntroSection = () => {
  return <div>
    <div className="flex flex-col lg:col-span-1 lg:h-full">
        <div className="space-y-3">
          <div className="">
            <img className="h-52 rounded-full" src="https://avatars.githubusercontent.com/u/76687839?s=400&u=f0eb0f5980c229de22d72ee4ad132d411d1d4359&v=4" alt="" />
          </div>
          <h1 className="text-5xl font-bold text-left text-blue-700">{profile.name}</h1>
          <h2 className="text-2xl font-bold text-blue-300">{profile.role}</h2>
          <p className="text-[1.1rem]  text-blue-950">{profile.about}</p>
        </div>

        

        <ul className="flex flex-wrap">
          {profile.socialLinks.map((icon) => (
            <Icon url={icon.url}>{icon.title}</Icon>
          ))}
        </ul>

        <div className="mt-10">
        <a href={`https://drive.google.com/uc?export=download&id=${resumeFileId}`} download="resume.pdf" className="px-5 py-2 font-bold text-white bg-blue-950 rounded-lg">Dowload My Resume</a>
        </div>
      </div>
  </div>;
};

export default IntroSection;
