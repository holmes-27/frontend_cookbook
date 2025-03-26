import React from "react";
import ComponentC from "./ComponentC";
function ComponentB(){
    return(
        <div className="draw-box">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB;