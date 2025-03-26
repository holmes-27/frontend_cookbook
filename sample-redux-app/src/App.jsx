import React from "react";
import { MovieList } from "./components/MovieList";
import { MovieInput } from "./components/MovieInput";

function App(){
  return(
    <div className="border-4 ml-100 mr-100 mt-5 p-5">
      <h1 className="text-center font-bold text-3xl">Movie List</h1>
      <br />
      <MovieInput />
      <MovieList />
    </div>
  )
}

export default App;