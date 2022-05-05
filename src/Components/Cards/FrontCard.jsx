import React from 'react'
import ccs from './FrontCard.css'
import profilePixel from '/assets/profilePixel.png'
const FrontCard = () => {
  return (
    <div className='FrontCard absolute min-w-full min-h-full rounded-full bg-color3' >
        <img src={profilePixel} className='w-56 h-56 rounded-full '/>
    </div>
  )
}

export default FrontCard