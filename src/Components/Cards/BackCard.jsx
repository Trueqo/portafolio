import React from 'react'
import profile from '/assets/profile.jpg'
const BackCard = () => {
  return (
    <div className='absolute min-w-full min-h-full bg-cover rounded-full' style={{backfaceVisibility:"hidden",transform:"rotateY(180deg)"}}>
        <img src={profile} className='object-cover w-56 h-56  rounded-full '/>
    </div>
  )
}

export default BackCard