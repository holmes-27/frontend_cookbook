import React, { use } from "react";
import { useState, useEffect } from "react";

function hooksuseEffect1(){
    const [count, setCount] = useState(0);
    const [count5,setCount5] = useState(5);

    const changeVal = ()=>{
        setCount(count + 1);
    }

    useEffect(()=>{
        document.title = `${count5} new messages`;
    },[count5])

    return(
        <>
            <h1>{count} new messages</h1>
            <button onClick={changeVal}>Click</button><br/>
            
            <h1>{count5} new messages</h1>
            <button onClick={()=>setCount5(count5 + 5)}>Click 5</button><br/>
        </>
    )
}

export default hooksuseEffect1;