import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai';
const ContNavbar = ({showMenu,active}) => {
  return (
    <div className='md:hidden'>
        <ul className={active ? 'flex flex-col items-center md:hidden justify-center left-10  fixed inset-0 bg-color1 border-2 border-black z-10 ':'hidden'}>

                    <button className='absolute top-1 right-10 mt-3 '><AiFillCloseSquare onClick={showMenu} className='cursor-pointer w-10 h-10 text-white' /></button>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer '>
                        <a href='#' className='text-xl hover:text-teal-900 duration-500'>
                            Home
                        </a>
                    </li>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer '>
                        <a href='#' className='text-xl hover:text-teal-900 duration-500'>
                            Projects
                        </a>
                    </li>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer'>
                        <a href='#' className='text-xl hover:text-teal-900 duration-500'>
                            Achievements
                        </a>
                    </li>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer'>
                        <a href='#' className='text-xl hover:text-teal-900 duration-500'>
                            Contact
                        </a>
                    </li>  
        </ul>
    </div>
  )
}

export default ContNavbar