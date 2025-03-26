import React, { useEffect } from "react";
import { useRef } from "react";

function HooksuseRef1() {
    const btnRef = useRef();

    const focusBtn = ()=>{
        btnRef.current.focus();
    }

    useEffect(()=>{
        btnRef.current.focus()
    },[])

    return(
        <div>
            <h1>Auto-Focus Text Field</h1>
            <input type="text" ref={btnRef}></input>
            <button>Click to Focus</button>
        </div>
    )
}

export default HooksuseRef1;