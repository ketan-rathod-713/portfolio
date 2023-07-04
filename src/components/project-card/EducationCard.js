import React from "react";

const EducationCard = ({education}) => {
  return <>
    <div className="flex flex-col hover:bg-orange-300 p-4 transition-all transition-200 rounded-md cursor-pointer">
                <div className="md:grid md:grid-cols-10">
                  <h3 className="text-[0.9rem] font-bold text-gray-600 md:col-span-3 text-blue-400">
                    {education.time}
                  </h3>
                  <div className="md:col-span-7">
                    <div>
                      <a href={education.instituteURL} target="_blank"  rel="noreferrer" className="hover:text-blue-950 text-xl font-bold text-gray-900">
                        {education.instituteName}
                      </a>

                      <p className="hover:text-blue-950 sm:text-[1.2rem] text-gray-900">
                        {education.degree}
                      </p>
                      {/* <h3 className="text-[1.1rem]">Senior Engineer</h3> */}
                      <p className="text-[1rem] mt-2 text-gray-500">
                        {education.description}
                      </p>

                      <div>
                      { education.grades && <div>
                        <p className="text-[1rem] mt-2 text-gray-700">Grades: {education.grades}</p>

                        </div>
                        }
                      </div>
                    </div>
                    
                    {/* <div className="mt-1">
                      {education.referencesLinks && (
                        <div className="flex flex-wrap text-[.9rem] p-0">
                          {education.referencesLinks.map((links) => (
                            <Links>{links.title}</Links>
                          ))}
                        </div> */}
                      {/* )} */}
                    {/* </div> */}

                    {/* <div className="flex flex-wrap">
                      {education.badges.map((badge) => (
                        <Badge>{badge}</Badge>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
  </>;
};

export default EducationCard;
