import React from 'react'
import profile from '../../assets/profile.jpg'
const BackCard = () => {
  return (
    <div className='absolute min-w-full min-h-full bg-cover rounded-full' style={{backfaceVisibility:"hidden",transform:"rotateY(180deg)"}}>
        <img src={profile} className='w-64 h-64 rounded-full '/>
    </div>
  )
}

export default BackCard