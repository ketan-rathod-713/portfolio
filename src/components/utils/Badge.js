import React from "react";

const Badge = ({children, color}) => {
  return (
    <span className={`mr-3 mt-3 inline-flex items-center rounded-md px-4 py-2 text-xs font-medium ring-1 ring-inset ${color ? `text-${color}-700 ring-${color}-600/20 bg-${color}-400` :"text-green-700  ring-green-600/20 bg-green-50" } `}>
      {children}
    </span>
  );
};

export default Badge;
