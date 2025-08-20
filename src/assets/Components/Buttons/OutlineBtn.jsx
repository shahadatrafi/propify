import React from "react";
import { Link } from "react-router-dom";

const OutlineBtn = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="bg-transparent ps-6 pe-2 py-1.5 text-[18px] text-black tracking-tight font-medium capitalize rounded-full border border-gray-500 hover:border-orange-500 hover:bg-orange-500 transition-all hover:text-white flex gap-2 items-center justify-between i-pulse group w-fit"
    >
      {text}
     

      <svg
      className="bg-black ps-1.5 pe-0.5 rounded-full group-hover:bg-white transition-all"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
        className="group-hover:fill-orange-500 transition-all"
          fill="#fff"
          d="M6 5.912c0-.155.037-.307.107-.443c.23-.44.75-.599 1.163-.354l10.29 6.088c.14.083.255.206.332.355c.23.44.08.995-.332 1.239L7.27 18.885a.8.8 0 0 1-.415.115C6.383 19 6 18.592 6 18.089z"
        />
      </svg>
    </Link>
  );
};

export default OutlineBtn;
