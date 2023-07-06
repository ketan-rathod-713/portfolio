import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setMode } from "../../features/theme/themeSlice";
import { LIGHT } from "../../app/constants";

const Navbar = () => {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  const handleModeChange = () => {
    dispatch(setMode())
  };

  return (
    <>
      <div className="flex justify-end pl-6 pr-6">
        <button
          onClick={handleModeChange}
          type="submit"
          className={`mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${mode === LIGHT ? "bg-onPrimaryContainer text-onPrimary" : "bg-darkOnPrimaryContainer text-darkOnPrimary"}`}
        >
          Change {mode} Theme
        </button>
      </div>
    </>
  );
};

export default Navbar;
