import React from "react";
import { Link } from "react-router-dom";

const Button1 = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="bg-orange-500 ps-6 pe-2 py-1.5 text-[18px] text-white tracking-tight font-medium capitalize rounded-full border border-orange-500 hover:bg-transparent transition-all hover:text-black flex gap-2 items-center justify-between i-pulse group w-fit"
    >
      {text}

      <svg
        className="bg-white p-1.5 rounded-full group-hover:bg-orange-500 transition-all"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          className="group-hover:fill-white transition-all"
          fill="#000000"
          fillRule="evenodd"
          d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default Button1;
