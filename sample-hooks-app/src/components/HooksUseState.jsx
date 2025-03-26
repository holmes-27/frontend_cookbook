import React from "react";
import { useState } from "react";

function hooksuseState(){
  const [count, setCount] = useState(0);

  const changeVal = ()=>{
    setCount((prev)=>prev+1);
  }

  return(
    <>
      <h1>Count : {count}</h1>
      <button onClick={changeVal}>Press</button>
    </>
  )
}

export default hooksuseState;