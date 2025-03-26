import React from "react";
import { useReducer } from "react";

function HooksuseReducer() {
    function counterReducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return {count: state.count + 1};
            case 'DECREMENT':
                return {count: state.count - 1};
            case 'RESET':
                return {count: 0};
            default:
                throw Error("Invalid action");
        }
    }
    
    const [state, dispatch] = useReducer(counterReducer, {count:0})

    return(
        <>
            <h1>Reduce the use of useState using useReducer</h1>
            <h1>{state.count}</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
        </>
    )

}

export default HooksuseReducer;