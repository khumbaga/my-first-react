import React from 'react'
import Hairtsagnuud from './Hairtsagnuud'
import "./hairtsag.css"

const ClickSpeed = () => {
  return (
    <div>
    <div  className='container'>
<Hairtsagnuud too={0} tailbar={"timer"} color={"pink"}/>
<Hairtsagnuud too={0} tailbar={"click"} color={"yellow"}/>
<Hairtsagnuud too={0} tailbar={"score"} color={"green"}/>
    </div>
    <div className='darah-heseg'>
      END DAR
    </div>
    </div>
  )
}
export default ClickSpeed