import React , { Component, useEffect, useRef, useState } from 'react';
import WithCount from '../hoc/WithCount';

const HoverCount = ({count , Increment}) => {
    const [data,setData] = useState("");
    const [countNum,setCountNum] = useState(0);
    const inputRef = useRef()
    const numRef = useRef()

    const changeHandler = (e) =>{
        setData(e.target.value);
    }
    useEffect(()=>{
        inputRef.current = data;
        numRef.current = countNum;
    },[data,countNum])
    return ( 

        <div>
            {/* <button onMouseOver = {Increment}>Hover {count} times</button> */}
            <input type="text" onChange={changeHandler} value={data}></input>
            <p>my name is {data} and my befor name was {inputRef.current} and {countNum} , beforNum : {numRef.current}</p>
            <div>
                <button onClick={()=>setCountNum(Math.floor(Math.random()*10))}>Click Me!</button>
            </div>
        </div>
     );
}
 
export default HoverCount;