import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai';
import CVJulianOchoaBarco from '../../documents/CV.pdf'
const ContNavbar = ({showMenu,active}) => {
  return (
    <div className='md:hidden'>
        <ul className={active ? 'flex flex-col items-center md:hidden justify-center left-10  fixed inset-0 bg-color1 border-2 border-black z-10 ':'hidden'}>

                    <button className='absolute top-1 right-10 mt-3 '><AiFillCloseSquare onClick={showMenu} className='cursor-pointer w-10 h-10 text-white' /></button>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer  mb-10 md:mb-20'>
                        <a href='#' className='text-white  text-2xl  md:text-5xl hover:text-teal-900 duration-500'>
                            Home
                        </a>
                    </li>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer  mb-10 md:mb-20'>
                        <a href='#' className='text-white  text-2xl  md:text-5xl hover:text-teal-900 duration-500'>
                            Projects
                        </a>
                    </li>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer mb-10 md:mb-20'>
                        <a href='#' className='text-white  text-2xl  md:text-5xl hover:text-teal-900 duration-500'>
                            Achievements
                        </a>
                    </li>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer mb-10 md:mb-20'>
                        <a href='#' className='text-white  text-2xl  md:text-5xl hover:text-teal-900 duration-500'>
                            Contact
                        </a>
                    </li>
                    <li className='hover:border-b-2 hover:border-white duration-500 cursor-pointer border-2 border-color2 rounded-xl  bg-color2 mb:-7  md:mb-20'>
                        <a  href={CVJulianOchoaBarco}  download={'CVJulianOchoaBarco.pdf'} className='text-white  text-2xl  md:text-5xl hover:text-black duration-500 mx-4'>
                            CV
                        </a>
                    </li>   
        </ul>
    </div>
  )
}

export default ContNavbar