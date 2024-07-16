import React from 'react'
import {useState,useMemo} from "react";

const Usememo = () => {
 const [count,setCount]=useState(0);
 const [num,setNum]=useState(10);
  function increment(){
   setCount(count+1);
  }
  const x=useMemo(()=>{
    return fact(10);
  },[count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default Usememo;
function fact(num){
 let fact=0;
 for(let i=num;i>=1;i--){
  var factorial=fact*i;
 }
  return factorial;
}


