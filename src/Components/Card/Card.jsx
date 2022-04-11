import React from 'react'
import BackCard from '../Cards/BackCard'
import FrontCard from '../Cards/FrontCard'
import css from './Card.css'

const Card = () => {
  function girar (){
    const card = document.getElementById('card')
    card.classList.toggle('active')
  }
  return (
    <div className='Card absolute min-w-full min-h-full rounded-full ' id='card' onClick={girar}>
    <FrontCard/>
    <BackCard/>
    </div>
  )
}

export default Card