import React, { createContext, useContext, useReducer, useState } from 'react';

const CounterContext = createContext();
const CounterContextDispature = createContext();

const initialState = 0;

const reducer = (state,action) => {
    switch(action.type){
        case "add" :
           return state + action.value;
        case "decrement" :
            return  state - action.value; 
        case "reset":
            return initialState;
        default:
            return state;
    }
};

const ContextProvider = ({children}) => {

    const [count,dispatch] = useReducer(reducer,initialState);
    return (

        <CounterContext.Provider value={count}>
            <CounterContextDispature.Provider value={dispatch}>
                {children}
            </CounterContextDispature.Provider>
        </CounterContext.Provider>

     );
    }
    
    export default ContextProvider;
    export const useCount = () => useContext(CounterContext);
    export const useCountAction = () => useContext(CounterContextDispature);

