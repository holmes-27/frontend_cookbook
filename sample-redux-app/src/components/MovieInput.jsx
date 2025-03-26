import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";

export const MovieInput = ()=>{
    const [newMovie,setNewMovie] = useState("");
    const dispatch = useDispatch();

    const handleNewMovie = ()=>{
        if (newMovie){
            dispatch(addMovie(newMovie));
            setNewMovie("");
        }
    }

    return(
        <>
            <input class="border-2 border-gray-400 rounded-md p-0.5 hover:border-blue-300 focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none" type="text" onChange={(e)=>{setNewMovie(e.target.value)}} value={newMovie} /> &nbsp;
            <button class="bg-cyan-500 rounded-md p-2 text-white font-bold shadow-lg shadow-cyan-500/50" onClick={handleNewMovie}>Add Movie</button>
        </>
    )
}