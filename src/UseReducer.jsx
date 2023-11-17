import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [count,setCount] = useState(0)
    const [number, setNumber] = useState(5)
    const factorial = React.useMemo(()=>fact(number),[number])
    const handleChange = () =>{
        setCount(count+1)
    }
    return(
    <>
    {factorial}
    button onClick={handleChange}>share</button>
    {count}

    </>
    )
    
}
const fact =(n) =>{
    let answer = 1;
    for (var i= n;i>=1;i--){
        answer = answer*i
    }
    console.log("FACTORIAL CALLED")
    return answer
}