import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaWeixin,
} from "react-icons/fa";
import Logo from "../assets/salahuddinLogo.svg";

const Header = () => {
  return (
    <header
      className="w-full py-2 bg-white 
    border-b-1 border-gray-300 
    shadow-md z-10"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            {/* <h3 className=" font-primary text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              SALAHUDDIN
            </h3> */}
            <img className="lg:w-[150px]" src={Logo} alt="Logo" />
          </a>
          {/* socials */}
          <div className="flex text-gray-900 text-[25px] gap-x-6 max-w-max  ">
            <a target="_blank" href="">
              <FaFacebookSquare />
            </a>
            <a target="_blank" href="">
              <FaWeixin />
            </a>
            <a target="_blank" href="">
              <FaLinkedin />
            </a>
            <a target="_blank" href="">
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
