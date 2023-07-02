import React from "react";
import Links from "../utils/Links";
import Badge from "../utils/Badge";

const ExperienceCard = ({experience}) => {
  return <>
    <div className="flex flex-col hover:bg-orange-300 hover:text-white p-4 transition-all transition-200 rounded-md cursor-pointer">
                <div className="md:grid md:grid-cols-10">
                  <h3 className="text-[0.9rem] font-bold text-gray-600 md:col-span-3 text-blue-400">
                    {experience.time}
                  </h3>
                  <div className="md:col-span-7">
                    <div>
                      <a className=" font-bold text-gray-900">
                        {experience.role}
                      </a>
                      {/* <h3 className="text-[1.1rem]">Senior Engineer</h3> */}
                      <p className="text-[1rem] mt-2 text-gray-500">
                        {experience.description}
                      </p>
                    </div>
                    <div className="mt-1">
                      {experience.referencesLinks && (
                        <div className="flex flex-wrap text-[.9rem] p-0">
                          {experience.referencesLinks.map((links) => (
                            <Links>{links.title}</Links>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap">
                      {experience.badges.map((badge) => (
                        <Badge>{badge}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
  </>;
};

export default ExperienceCard;
