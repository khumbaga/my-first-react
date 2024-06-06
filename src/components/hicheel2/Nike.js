import React from 'react'
import Sneaker from './Sneaker'
import "./Sneaker.css"

const Nike = () => {

  const puuz={
    name : "Nike",
    desc : "Nike puuz"
  }
  const puuznuud = [puuz, puuz, puuz]
  return (
    <div>
      {puuznuud.map(puz=>
        <Sneaker name={puuz.name} desc= {puuz.desc}/>
        )}
    </div>
  )
}

export default Nike