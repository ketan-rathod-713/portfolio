import React from "react";

const Badge = ({children}) => {
  return (
    <span className="mr-3 mt-3 inline-flex items-center rounded-md bg-green-50 px-4 py-2 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
      {children}
    </span>
  );
};

export default Badge;
