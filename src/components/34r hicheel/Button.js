import React, { useState } from 'react'

const Button = () => {
    const [text, setText] = useState("ON")

    const onClick=()=>{
        setText(text=== "ON" ? "OFF" : "ON")
    }
  return (
   <button className={text==="ON" ? "on" : "" } onClick={onClick} >{text}</button>
  )
}

export default Button