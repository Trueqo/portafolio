import React from 'react'
import Recurso from '../../assets/Recurso.png'
const Form = () => {
  return (
    <div className='relative justify-center items-center'>

        <div className='bg-green-500 w-full min-h-screen'>
                
        </div>
        <div className='absolute bottom-0 right-0 '>
            <img src={Recurso} className='object-fill w-56 md:w-96 ' />
        </div>
    </div>
  )
}

export default Form