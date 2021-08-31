import React , { Component, useState } from 'react';
import WithCount from '../hoc/WithCount';

const ClickCount = ({count , Increment}) => {
    return ( 
        <div>
            <button onClick = {Increment}>Click {count} times</button>
        </div>
     );
}
 
export default WithCount(ClickCount ,5);