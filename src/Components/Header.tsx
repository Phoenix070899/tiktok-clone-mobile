import React from "react";
import IconNode from "./IconNode";
import { RiLiveFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <div className="absolute top-3 w-full text-center z-10 flex justify-between items-center px-5">
      <IconNode icon={<RiLiveFill size={24} />} />
      <div className="flex items-center justify-center gap-2 text-sm font-semibold">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>Following</span>
        </NavLink>
        <NavLink
          to="/for-you"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>For You</span>
        </NavLink>
      </div>
      <IconNode icon={<AiOutlineSearch size={24} />} />
    </div>
  );
}

export default Header;
