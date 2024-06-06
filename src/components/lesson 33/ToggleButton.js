import React, { useState } from 'react'
import "./toggle.css"

const ToggleButton = () => {
    const [text, setText]= useState("OFF")
    console.log('test');
  return (
    <div>
        <button className={text === "ON" ? "on" : "off"}onClick={()=>{setText(text ==="ON" ? "OFF" : "ON")}}>{text}</button>
    </div>
  )
}

export default ToggleButton