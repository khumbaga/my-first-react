import React from 'react'
import './kino.css'
import avengersImg from './Avengers.webp'
import Movie from './Movie'


const Kino = () => {
    const movie = {
        name : 'Avengers', 
        desc : 'Marvels the avengers',
        image: avengersImg
    }
    
    
    const kinonuud= [movie, movie, movie]
  return (
    <div className='container'>
    
        {kinonuud.map(kino=>
            <Movie img= {movie.image} name= {movie.name} desc={movie.desc}/>
        )}

    </div>
  )
}

export default Kino