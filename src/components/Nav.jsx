import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsBriefcase,
  BsChatDots,
  BsChatSquareText,
  BsClipboardData,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="w-full bottom-0 overflow-hidden fixed lg:right-1 lg:inset-y-1/3 lg:h-full lg:w-auto z-50 ">
      <div className="mx-auto">
        <div
          className="w-full bg-white/20 backdrop-blur-2xl
      border-2 border-gray-300
      shadow-xl rounded-md max-w-[360px] mx-auto px-0.5 lg:py-1 flex lg:flex-col justify-between items-center text-xl text-gray-800"
        >
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="home"
            offset={-200}
            className="cursor-pointer w-[45px] h-[45px] flex justify-center items-center "
          >
            <BiHomeAlt />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className="cursor-pointer w-[45px] h-[45px] flex justify-center items-center "
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="qualification"
            className="cursor-pointer w-[45px] h-[45px] flex justify-center items-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className="cursor-pointer w-[45px] h-[45px] flex justify-center items-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className="cursor-pointer w-[45px] h-[45px] flex justify-center items-center"
          >
            <BsChatDots />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
