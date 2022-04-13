import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import ContNavbar from './ContNavbar';
import CVJulianOchoaBarco from '../../documents/CV.pdf'
const Navbar = () => {

    const[active,setActive] = useState(false)

    const showMenu = () =>{
        setActive(!active)

    }


  return (
    <div>
        <nav className='w-full  flex  items-center justify-between lg:justify-center  bg-color1 text-white'>
            
            
            
            <span className='text-lg font-bold ml-4 lg:hidden '>
                Wellcome to my Portafolio
            </span>
            <button onClick={showMenu} className='absolute mr-4 text-4xl text-white md:hidden right-6'>
                <GiHamburgerMenu/>
            </button>
            
            <div className='md:flex md:mr-5 lg:mr-10 p-8'>
                <ul className='hidden md:flex md:flex-row md:gap-6 lg:gap-14'>
                    <li className='hover:border-b-2 hover:border-teal-900 duration-500 cursor-pointer'>
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
                    <li className='hover:border-b-2 hover:border-white duration-500 cursor-pointer border-2 border-color2 rounded-xl  bg-color2 '>
                        <a href={CVJulianOchoaBarco}  download={'CVJulianOchoaBarco.pdf'} className='text-white  text-xl hover:text-black duration-500 mx-4'>
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