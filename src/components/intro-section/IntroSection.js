import React from "react";
import { profile } from "../../app/constants";
import Icon from "../utils/Icon";
import { resumeFileId } from "../../app/constants";
import { useSelector } from "react-redux";
import { selectMode } from "../../features/theme/themeSlice";
import { LIGHT } from "../../app/constants";

const IntroSection = () => {
  const mode = useSelector(selectMode)

  return <div>
    <div className="flex flex-col lg:col-span-1 lg:h-full">
        <div className="space-y-3">
          <div className="">
            <img className="h-52 rounded-full" src="https://avatars.githubusercontent.com/u/76687839?s=400&u=f0eb0f5980c229de22d72ee4ad132d411d1d4359&v=4" alt="" />
          </div>
          <h1 className={`text-5xl font-bold text-left ${mode === LIGHT ? "text-primary" : "text-darkPrimary"}`}>{profile.name}</h1>
          <h2 className={`text-2xl font-bold text-blue-300 ${mode === LIGHT ? "text-secondary" : "text-darkSecondary"}`}>{profile.role}</h2>
          <p className={`text-[1.1rem]  text-blue-950 ${mode === LIGHT ? "text-tertiary" : "text-darkTertiary"}`}>{profile.about}</p>
        </div>

        

        <ul className="flex flex-wrap">
          {profile.socialLinks.map((icon) => (
            <Icon classes={`${mode === LIGHT ? "text-secondary" : "text-darkSecondary"}`} url={icon.url}>{icon.title}</Icon>
          ))}
        </ul>

        <div className="mt-10">
        <a href={`https://drive.google.com/uc?export=download&id=${resumeFileId}`} download="resume.pdf" className={`px-5 py-3 font-bold text-white bg-blue-950 rounded-lg ${mode === LIGHT ? "bg-onPrimaryContainer text-onPrimary" : "bg-darkOnPrimaryContainer text-darkOnPrimary"}`}>Dowload My Resume</a>
        </div>
      </div>
  </div>;
};

export default IntroSection;
