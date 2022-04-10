import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai';
const ContNavbar = ({showMenu,active}) => {
  return (
    <div className='md:hidden'>
        <ul className={active ? 'flex flex-col items-center md:hidden justify-center left-3/4  fixed inset-0 bg-white ':'hidden'}>

                    <button><AiFillCloseSquare onClick={showMenu} className='cursor-pointer' /></button>
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