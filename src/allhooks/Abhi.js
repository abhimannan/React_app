// useState() hook
import React from 'react'
import { useState } from 'react';
const Abhi = () => {
 // const [input,setInput]=useState("");
 // function handleinput(event){
 //     setInput(event.target.value);
 // }
 const [details,setDetails]=useState({
  name:"",
  count:0
 });
 // const [count,setCount]=useState(0)
 function handleIncrease(){
  setDetails((prev)=>({...prev,count:prev.count+1}))
 }

 function handleDecrease(){
  setDetails((prev)=>({...prev,count:prev.count-1}))
 }
 function handlename(event){
 setDetails(event.target.value)
 }
return (
   <>
    <div>
     <input type="text" onChange={handlename}></input>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{details.name}</h1>
      <button onClick={handleIncrease}>Increment</button> 
    </div>
    </>
  )
}

export default Abhi
