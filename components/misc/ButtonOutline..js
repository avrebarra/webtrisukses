import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-yellow-500 text-slate-100 bg-yellow-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-slate-100 hover:text-yellow-500 transition-all hover:shadow-grey-100 hover:shadow-lg ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
