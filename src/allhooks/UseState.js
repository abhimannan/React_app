//this same code see in the Abhi.js component

import React from 'react'
import { useState } from 'react'
const UseState = () => {
  const [count,setCount]=useState(0)
  function handleDecrease(){
    setCount(count-1);
  }
  function handleIncrease(){
    setCount(count+1);
  }
  return (
    <div>
      <h1>abhi</h1>
      {/* <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increment</button> */}
    </div>
  )
}

export default UseState()
