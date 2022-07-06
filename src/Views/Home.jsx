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
import { SiTailwindcss } from 'react-icons/si';

const Home = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 min-h-screen' id='home'>
            <div className='col-span-1'>
                <div className='flex flex-col items-center'>
                    <span className='text-5xl font-bold text-white mt-[2rem] font-akshar text-center'>Julián Ochoa Barco</span>
                    <span className='text-3xl font-bold text-black mt-4 font-akshar text-center'>FULL-STACK WEB DEVELOPER</span>
                    <ContainerCard />
                
                    <span className='font-akshar font-bold text-3xl mt-5'>Hello !</span>

                    <div className='w-[20rem] md:w-[24rem] font-akshar'>
                        <a className='mx-auto'>Bienvenido a mi portafolio. Soy Julián Ochoa Barco. Tengo 22 años. Vivo en Medellín-Colombia. Soy desarrollador Full-Stack y actualmente estudio Ingeniería Mecatrónica (Octavo semestre). Soy un apasionado de la robótica y la programación. </a>
                    </div>
                </div>
            </div>
            <div className='col-span-1 flex flex-col'>
                <span className='text-4xl font-bold text-white mb-6 text-center mt-[2rem]'>
                    My language, frameworks and technologies
                </span>
                <div className=' md:w-[25rem] flex flex-row flex-wrap justify-center gap-6 mt-10 mx-auto mb-10'>
                    <a className='text-7xl text-orange-600 hover:translate-y-2' title='HTML'><AiFillHtml5 /></a>
                    <a className='text-7xl text-blue-600 hover:translate-y-2'><IoLogoCss3 /></a>
                    <a className='text-7xl text-cyan-400 hover:translate-y-2' title='Tailwind CSS'><SiTailwindcss /></a>
                    <a className='text-7xl text-violet-500 hover:translate-y-2'><BsFillBootstrapFill /></a>
                    <a className='text-7xl text-green-600 hover:translate-y-2'><SiMongodb /></a>
                    <a className='text-7xl text-black hover:translate-y-2'><SiExpress /></a>
                    <a className='text-7xl text-blue-500 hover:translate-y-2'><SiReact /></a>
                    <a className='text-7xl text-green-800 hover:translate-y-2'><SiNodedotjs /></a>
                    <a className='text-7xl text-yellow-400 hover:translate-y-2'><SiJavascript /></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Home