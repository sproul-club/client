import React from 'react'
import builderbear from './assets/build.gif'
import './UnderConstruction.css'

const UnderConstruction = () => {
  return (
    <div className='construction-wrapper'>
      <div className="title">We put our site on paws.</div>
      <img className='builderbear' src={builderbear} alt="a cute construction bear"/>
      <div className="title">Construction in progress. Check back soon!</div>
    </div>
  )
}

export default UnderConstruction
