import React , {useState} from 'react'
import './toologch.css'

const Toologch = () => {

    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
  return (
    <div className='containr'>
        <div><h1>{count}</h1>
         </div>
            <div>
        <button className='add' onClick= {increment}>Increment</button>
        <button className='minus' onClick= {decrement}>Decrement</button>
        <button className='zero' onClick= {reset}>Reset</button>
       </div>
    </div>
  )
}

export default Toologch