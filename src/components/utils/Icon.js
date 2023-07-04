import React from "react";

const Icon = ({children, url}) => {
  return <a href={url} target="_blank" rel="noreferrer" className="mr-3 mt-3 inline-flex items-center rounded-md bg-blue-400 px-4 py-2 text-xs font-medium text-blue-800 font-bold capitalize ring-1 ring-inset ring-red-600/20">
  {children}
</a>;
};

export default Icon;
