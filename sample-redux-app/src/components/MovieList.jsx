import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = ()=>{
    const movies = useSelector((state)=> state.movies.movies);
    const dispatch = useDispatch();
    
    const handleRemoveMovie = (id)=>{
        dispatch(removeMovie(id));
    }

    return(
        <div>
            {movies.map((movie)=>{
                return (
                <div className="flex items-center space-x-1.5" key={movie.id}> 
                    <h1 className="font-medium">{movie.name}</h1> <button className="bg-red-500 rounded-md p-1 text-white font-semibold mb-2 shadow-sm shadow-red-400/50" onClick={() => handleRemoveMovie(movie.id)}>Remove</button>
                </div>
                )
            })}
        </div>
    )
}