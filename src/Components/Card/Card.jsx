import React from 'react'
import BackCard from '../Cards/BackCard'
import FrontCard from '../Cards/FrontCard'
import css from './Card.css'

const Card = () => {
  return (
    <div className='Card absolute min-w-full min-h-full rounded-full'>
    <FrontCard/>
    <BackCard/>
    </div>
  )
}

export default Card