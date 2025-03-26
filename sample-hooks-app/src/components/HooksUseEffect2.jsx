import React, { useState } from "react";
import { useEffect } from "react";

const hooksuseEffect2 = ()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json)=>setData(json));
    },[])
    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map((item)=>(
                    <li>{item.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default hooksuseEffect2;