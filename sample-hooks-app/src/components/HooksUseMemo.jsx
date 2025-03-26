import React, { useState } from "react";
import { useMemo } from "react";

function HooksuseMemo() {
    const [num,setNum] = useState("");

    const factorial = (numb)=>{
        let fact=1;
        for (let i=1;i<numb+1;i++){
            fact *= i
        }
        return fact;
    }

    const passNum = (e)=>{
        setNum(parseInt(e.target.value));
    }

    const memorizedFact = useMemo(()=>factorial(num),[num]);

    return(
        <>
            <h1>Memorize the factorial value</h1>
            <input type="number" onChange={passNum}></input>
            <h2>Factorial: {memorizedFact}</h2>
        </>
    )
}

export default HooksuseMemo;