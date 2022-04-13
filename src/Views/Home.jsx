import React from 'react'
import ContainerCard from '../Components/ContainerCard/ContainerCard'
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';

const Home = () => {
  return (
    <div className='min-h-screen text-center flex flex-col items-center'>
      <span className='text-5xl font-bold text-white mt-4'>Julián Ochoa Barco</span>
      <span className='text-2xl font-bold text-black mt-4'>FULL-STACK WEB DEVELOPER</span>
      <ContainerCard/>
      <div className='text-center flex flex-col'>
      <span className='font-bold mt-5'>Hello !</span>
      <span>Wellcome to my web portfolio.</span>
      <div className='w-72 h-44 text-left'>
      <span>Let me tell you about me. I am Julián OchoaBarco. I am 22 year old. I live in Medellin-Colombia. I am a Full-Stack developer and I am currently studying Mechatronics Engineering. I am engaged</span>
      </div>
      </div>
      <div className='h-auto w-full flex flex-col'>
      <span className='text-5xl font-bold text-white mt-4 mb-6'>My language, frameworks and technologies</span>
      <div className='flex flex-col flex-wrap h-40 mt-4 items-center md:gap-5'>
        <a className='text-7xl text-orange-600 mb-2'><AiFillHtml5/></a>
        <a className='text-7xl text-blue-600 mb-2'><IoLogoCss3/></a>
        <a className='text-7xl text-yellow-400 mb-2'><SiJavascript/></a>
        <a className='text-7xl text-violet-500 mb-2'><BsFillBootstrapFill/></a>
        <a className='text-7xl text-green-600 mb-2'><SiMongodb/></a>
        <a className='text-7xl text-black mb-2'><SiExpress/></a>
        <a className='text-7xl text-blue-500 mb-2'><SiReact/></a>
        <a className='text-7xl text-green-800 mb-2'><SiNodedotjs/></a>
        
      </div>
      </div>
    </div>
  )
}

export default Home