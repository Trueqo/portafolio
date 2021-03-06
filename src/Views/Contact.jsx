import React from 'react'
import Form from '../Components/Form/Form'
import Recurso from '/assets/Recurso.png'
const Contact = () => {
  return (
    <div className='h-screen  px-10  pt-[3rem] pb-44 relative flex flex-col items-center' id='contact'>
            <Form/>
            <div className='absolute bottom-[-0.4rem] right-0'>
              <img src={Recurso} className='object-fill w-56 md:w-80 lg:w-80'/>
            </div>
    </div>
  )
}

export default Contact