import React from 'react'
import './kino.css'
import Toologch from '../Toologch'


const Movie = ({img, name, desc}) => {
  return (
    <div className='movie'>
        <h1>{name}</h1>
        <p>{desc}</p>
        <img src={img} alt="" />

        <Toologch/>
    </div>
  )
}

export default Movie