import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink
      to={"/"}
      className={
        "w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center"
      }
    >
      <img src="/logo.webp" className="w-full h-full object-cover" alt="" />
    </NavLink>
  );
};

export default Logo;
