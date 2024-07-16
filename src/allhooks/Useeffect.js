import React, { useEffect, useState } from 'react'

const Useeffect = () => {
 // const [count,setCount]=useState(0);
 // const [name,setName]=useState("Frontend developer");
 //  function handleIncrease(){
 //   setCount(count+1);
 //  }
 //  function handlename(){
 //   setName("Fullstach Web Developer");
 //  }
 //  useEffect(()=>
 //   {console.log("hi i am useeffect")
 //   },[name,count]);
 const [timer,setTimer]=useState(0);
  useEffect(()=>{
   let time=setInterval(()=>{
    setTimer(timer+1);
   },1000);
   return ()=> {
    clearInterval(time);
   }
  })
  return (
    <div>
     <h1>{timer}</h1>
       {/* <h1>{count}</h1>
       <button onClick={handleIncrease}>Increment</button>
       <h1>{name}</h1>
        <button onClick={handlename}>changename</button> */}
        
    </div>
  )
}

export default Useeffect
