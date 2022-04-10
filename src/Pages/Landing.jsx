import React from 'react'
import Footer from '../Components/Footer/Footer'
import Achievements from '../Views/Achievements'
import Contact from '../Views/Contact'
import Home from '../Views/Home'
import Projects from '../Views/Projects'

const Landing = () => {
  return (
    <div className='min-h-screen'>
        <Home/>
        <Projects/>
        <Achievements/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing