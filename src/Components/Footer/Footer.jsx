import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='h-[10rem] w-full  bottom-0 bg-black text-white text-7xl'>
      <AiFillGithub/>
      <AiOutlineWhatsApp/>
    </div>
  )
}

export default Footer