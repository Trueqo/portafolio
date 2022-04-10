import React from 'react'
import Achievements from '../Views/Achievements'
import Contact from '../Views/Contact'
import Home from '../Views/Home'

const Landing = () => {
  return (
    <div className='min-h-screen'>
        <Home/>
        <Achievements/>
        <Contact/>
        
    </div>
  )
}

export default Landing