import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import 'tw-elements';
const Achievements = () => {
  return (
    <div className='min-h-screen bg-color2   text-center' id='achievements'>
        <h1 className='font-akshar font-bold text-5xl mt-[3rem] text-white '>Achievements</h1>
        <div className='w-full  min-h-screen  flex justify-center items-center  '>
          <Carousel/>
        </div>
    </div>
  )
}

export default Achievements