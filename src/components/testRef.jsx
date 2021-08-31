import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state,action) => {
    switch(action.type){
        case 'add':
            return state + action.value
        case 'decrement':
            return state - action.value
        case 'reset' :
            return initialState
        default :
            return state        
    }
}

const TestRefComp = () => {

    const [count,dispatch] = useReducer(reducer,initialState);
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState);

    return ( 
        <div>
            <p>the count one is : {count}</p>
            <p>the count two is : {countTwo}</p>
            <button onClick={()=>dispatch({type:"add" , value:1})}>add One</button>
            <button onClick={()=>dispatch({type:'decrement' , value : 1})}>decrement</button>
            <button onClick={()=>dispatchTwo({type:"add" , value:5})}>add Five 2</button>
            <button onClick={()=>dispatchTwo({type:'decrement' , value : 5})}>decrement 2</button>
            <button onClick={()=>dispatch({type : 'reset'})}>reset</button>
        </div>
     );
}
 
export default TestRefComp;