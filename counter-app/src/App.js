import React from 'react';
import './App.css';
import { useState} from 'react';

function App(){
  const [value,valueFunction] = useState(0);

  const incVal = () =>{
    valueFunction(value + 1);
  }
  const decVal = () =>{
    valueFunction(value - 1);
  }
  const resVal = () =>{
    valueFunction(0);
  }

  return (
    <div className='App'>
      <h1>Counter App</h1>
      <h2 style={{'font-size':'40px'}}>{value}</h2><br/>
      <button className='btn-style1' onClick={incVal}>Increment</button>
      &nbsp;&nbsp;
      <button className='btn-style2' onClick={decVal}>Decrement</button>
      &nbsp;&nbsp;
      <button className='btn-style3' onClick={resVal}>Reset</button>
      
    </div>
  );
};

export default App;
