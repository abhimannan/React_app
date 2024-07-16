import React from 'react'
import { useReducer } from 'react';
const initialvalue={count:0};
function reducer(state,action){
 switch(action.type){
    case "increase":
      return {count:state.count+1}
    case "decrement":
      return {count:state.count-1} 
    case "reset":
      return {count:state.count=0}
    default:
      return state;
 }
}
const Usereducer = () => {
  const [state,dispatch]=useReducer(reducer,initialvalue);
  function handleIncrement(){
    dispatch({type:"increase"});
  }
  function handleDecrement(){
    dispatch({type:"decrement"});
  }
  function handlereset(){
    dispatch({type:"reset"});
  }
  return (
    <div>

      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handlereset}>Reset</button>

    </div>
  )
}

export default Usereducer
