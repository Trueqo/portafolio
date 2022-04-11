import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import {IoIosRocket} from "react-icons/io"
const Footer = () => {
  return (
    <div className="h-[10rem] w-full  bottom-0  text-white  flex flex-row  bg-color1 items-center justify-between">
      <div className=" text-xl ml-4 md:ml-10 lg:ml-16 md:text-[1.7rem] lg:text-4xl flex md:gap-1 lg:gap-4 flex-col md:flex-row">
        <a>Developed with love by Julian Ochoa B.</a>
        <a className="text-orange-400 hover:text-color4"><IoIosRocket/></a>

      </div>
      <div className="mr-2 text-7xl flex flex-row md:gap-5 md:mr-10">
        <a className="hover:text-violet-800"> <AiFillGithub /></a>
        <a className="hover:text-green-500"><AiOutlineWhatsApp /></a>
      </div>
    </div>
  );
};

export default Footer;
