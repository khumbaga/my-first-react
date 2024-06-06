import React from 'react'
import "./Sneaker.css"
import Toggles from './Toggles'

const Sneaker = ({ name, desc}) => {
  return (
    <div>
      {/* <img>img</img> */}
      <h1>{name}</h1>
      <p>{desc}</p>
      <Toggles/>
    </div>
  )
}

export default Sneaker