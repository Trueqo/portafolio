import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import ContNavbar from './ContNavbar';
import CVJulianOchoaBarco from '../../documents/CV.pdf'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[active,setActive] = useState(false)

    const showMenu = () =>{
        setActive(!active)

    }


  return (
    <div>
        <nav className='w-full  flex  items-center justify-between lg:justify-center  bg-color1 text-white'>
            
            
            
            <div className='w-1 h-1'>
                <img  />
            </div>
            <button onClick={showMenu} className='absolute mr-4 text-4xl text-white md:hidden right-6'>
                <GiHamburgerMenu/>
            </button>
            
            <div className='md:flex justify-center p-6'>
                <ul className='hidden md:flex md:flex-row md:gap-6 lg:gap-14 font-akshar'>
                
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer'>
                        <Link to={'/'}>
                        <a href='#home' className='text-xl hover:text-teal-900 duration-500 p-2'>
                            Home
                        </a>
                        </Link>
                    </li>
                
                
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer '>
                        <Link to={'projects'}>
                            <a href='#projects' className='text-xl hover:text-teal-900 duration-500 p-2'>
                                Projects
                            </a>
                        </Link>
                    </li>
                
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer'>
                        <Link to={'achievements'}>
                        <a  className='text-xl hover:text-teal-900 duration-500 p-2'>
                            Achievements
                        </a>
                        </Link>
                    </li>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer'>
                        <Link to={'contact'}>
                        <a href='#contact' className='text-xl hover:text-teal-900 duration-500 p-2'>
                            Contact
                        </a>
                        </Link>
                    </li>
                    <li className='hover:border-white duration-500 cursor-pointer border-2 border-color2 rounded-xl  bg-color2'>
                        <a href={CVJulianOchoaBarco}  download={'CVJulianOchoaBarco'} className='text-white  text-xl hover:text-black duration-500 px-4 border-4 border-color2 rounded-xl'>
                            CV
                        </a>
                    </li> 
                </ul>
            </div>

            

        </nav>
        <ContNavbar showMenu={showMenu} active={active}/>
    </div>
  )
}

export default Navbar