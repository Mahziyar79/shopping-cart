import React from 'react';
import { useCount, useCountAction } from './ContextProvider';

const CounterOne = () => {
    const count = useCount();  //State
    const dispath = useCountAction() // dispatch

    return ( 
        <div>
            <h2>count is : {count}</h2>
            <button onClick={() => dispath({type:"add" , value : 1})}>add one</button>
            <button onClick={() => dispath({type:"add" , value : 5})}>add Five</button>
            <button onClick={() => dispath({type:"decrement" , value : 1})}>decrement</button>
            <button onClick={() => dispath({type:"reset"})}>reset</button>
        </div>
     );
}
 
export default CounterOne;