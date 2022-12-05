import React from "react";
import IconNode from "./IconNode";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  let activeStyle = {
    color: "yellow",
  };
  return (
    <div className="w-full h-[60px] bg-neutral-800 flex justify-between items-center px-5">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <IconNode icon={<AiFillHome size={24} />} detail="Home" />
      </NavLink>
      <NavLink
        to="/friends"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <IconNode icon={<FaUserFriends size={24} />} detail="Friends" />
      </NavLink>
      <NavLink
        to="/add"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <IconNode icon={<IoIosAddCircle size={42} />} />
      </NavLink>
      <NavLink
        to="/inbox"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <IconNode icon={<RiMessage2Fill size={24} />} detail="Inbox" />
      </NavLink>
      <NavLink
        to="/profile"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <IconNode icon={<BsFillPersonFill size={24} />} detail="Profile" />
      </NavLink>
    </div>
  );
}

export default Footer;
