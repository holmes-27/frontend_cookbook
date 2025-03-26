import React from "react";
import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC(){
    const user = useContext(UserContext);

    return(
        <div className="draw-box">
            <h1>Component C</h1>
            <h2>Hi! This is {user} and I am in Component C</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC;