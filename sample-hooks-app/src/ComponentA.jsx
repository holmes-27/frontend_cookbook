import React from "react";
import ComponentB from "./ComponentB.jsx";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

function ComponentA(){
    const [text, setText] = useState("Holmes");

    return(
        <div className="draw-box">
            <h1>Component A</h1>
            <h2>Hi! This is {text}</h2>
            <UserContext.Provider value={text}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;