import React from 'react'
import { useRef } from 'react';
const UseRef = () => {
  // const ref=useRef(0);
  // function handlecount(){
  //   console.log(ref.current=ref.current+1)
  // }
  let focusref = useRef(null);

  function handlefocus() {
    console.log(focusref.current)
    // focusref.current.focus();
    // focusref.current.style.backgroundColor="green";
    // focusref.current.style.width="400px";
  }
  return (
    <div>
      <input type="text" ref={focusref}></input>
      <button onClick={handlefocus}>Focus</button>
      {/* <button onClick={handlecount}>Count</button> */}
    </div>
  )
}

export default UseRef
