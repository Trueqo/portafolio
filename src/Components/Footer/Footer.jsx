import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io"
const Footer = () => {


  const linkWSP2 = 'https://wa.me/573017604450?text=%20Hola!%20Acabo%20de%20ver%20tu%20portafolio...'
  const linkGitHub = 'https://github.com/Trueqo'
  return (
    <div className="h-[6rem] w-full  bottom-0  text-white  flex flex-row  bg-color1 items-center justify-between">
      <div className=" text-xl ml-4 md:ml-10 lg:ml-16 md:text-[1.7rem] lg:text-4xl flex md:gap-1 lg:gap-4 flex-col md:flex-row">
        <span>Developed with love by Julian Ochoa B.</span>
        <span className="text-orange-400 hover:text-color4"><IoIosRocket /></span>

      </div>
      <div className="mr-2 text-7xl flex flex-row md:gap-5 md:mr-10">
        <span href={linkGitHub} className="hover:text-violet-800" target='_blank'> <AiFillGithub /></span>
        <span href={linkWSP2} className="hover:text-green-500" target='_blank'><AiOutlineWhatsApp /></span>
      </div>
    </div>
  );
};

export default Footer;
