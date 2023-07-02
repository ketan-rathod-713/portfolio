import React from "react";

const Icon = ({children, url}) => {
  return <a href={url} className="mr-3 mt-3 inline-flex items-center rounded-md bg-red-50 px-4 py-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
  {children}
</a>;
};

export default Icon;
