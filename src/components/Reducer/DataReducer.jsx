import React, { useReducer, useState } from 'react';


const initialization = 0

const reduce = (state,action) => {
    console.log(state);
    console.log(action);
    switch(action.type){
        case "add" :
           return state + action.value;
        case "decrement" :
            return  state - action.value; 
        case "reset":
            return initialization;
        default:
            return state;
    }
};

const DataReducer = () => {


const [count,dispatch] = useReducer(reduce,initialization);
const [countTwo,dispatchTwo] = useReducer(reduce,initialization);

    return ( 
        <div>
        <h2>count one is : {count}</h2>
        <div>
        <button onClick={()=>dispatch({type:"add" , value:1})}>add</button>
        <button onClick={()=>dispatch({type:"add" , value:5})}>add Five</button>
        <button onClick={()=>dispatch({type:"decrement" , value:1})}>decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
        <div>
        <h2>count two is : {countTwo}</h2>
        <button onClick={()=>dispatchTwo({type:"add" , value:1})}>add one 2</button>
        <button onClick={()=>dispatchTwo({type:"add" , value:5})}>add Five 2</button>
        <button onClick={()=>dispatchTwo({type:"decrement" , value:1})}>decrement 2</button>
        <button onClick={()=>dispatchTwo({type:"reset"})}>reset Two</button>
        </div>
    </div>
     );
}
 
export default DataReducer;