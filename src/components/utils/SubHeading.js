import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../../features/theme/themeSlice";
import { DARK, LIGHT } from "../../app/constants";

const SubHeading = ({children}) => {
    const mode = useSelector(selectMode);
  return <>
    <h3 className={`font-bold text-[1.4rem] mb-3 ${mode === LIGHT && "text-primary"} ${mode === DARK && "text-darkOnPrimaryContainer"}`}>{children}</h3>
  </>;
};

export default SubHeading;
