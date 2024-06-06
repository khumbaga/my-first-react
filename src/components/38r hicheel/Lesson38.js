import React from 'react'
import Kino from "./Kino"

const Lesson38 = () => {

    const movie1={name: "Avengers", desc: "Superhero movie"};
    const movie2={name: "Spider-Man", desc: "Into the Spider-Verse"};
    const movie3={name: "Thor", desc: "Thor movie"};
    
    const movies=[movie1, movie2, movie3]
  return (
    <div>
        <h3>Tanid sanal bolgoh kinonii jagsaalt</h3>
        <h6>Adal yawdalt, tulaant</h6>
        <input type="text" placeholder=' '/>
        <button>haih</button>

        {movies.map(movie =>
           < Kino name={movie.name} desc={movie.desc}/>
           )}
    </div>
  )
}
export default Lesson38