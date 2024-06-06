import React from 'react'
import "./hairtsag.css"

const Hairtsagnuud = ({too, tailbar, color}) => {
  return (
    <div className={'hairtsag ' + color}>
        <h1>{too}</h1>
        <p>{tailbar}</p>
    </div>
  )
}

export default Hairtsagnuud