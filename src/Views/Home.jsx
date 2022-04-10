import React from 'react'

import profilePixel from '../assets/profilePixel.png'

const Home = () => {
  return (
    <div className='min-h-screen flex items-center flex-col gap-5'>

        <div className='rounded-full bg-color3 w-60 h-60  mt-10 '>
          <img src={profilePixel} className='rounded-full ' title='Click me !'/>
        </div>
        
           <h1 className='text-lg font-bold text-center'>Hello!<br/></h1>
           <p className='text-center'> Wellcome to my web portfolio.<br/></p>
           <p className='mx-14 md:mx-60'>Let me tell you about me. I am Julián OchoaBarco. I am 22 year old. I live in Medellin-Colombia. I am a Full-Stack developer and I am currently studying Mechatronics Engineering. I am engaged
           </p>
        
    </div>
  )
}

export default Home