// import App from "./App"
// import React,{useRef,useState} from "react"

// const Watch = ()=>{
//     const [startTime, setStartTime] = useState(null)
//     const [now,setNow] = useState(null)
//     const intervalRef =useRef(null)

//     function handleStart(){
//         setStartTime(Date.now())
//         setNow(Date.now())
//         clearIntervel(intervelRef.current)
//         intervalRef.current =setInterval(()=>{
//             setStartTime(Date.now())
//         },10)

//     }
//     function stopTime(){
//         clearInterval(intervalRef.current)
//     }
//     let secondsPassed = 0;
//     if(startTime !== null && now !==null){
//         secondsPassed = (startTime - now)/1000
//     }
//     return(
//         <>
//         <h4>{secondsPassed.toFixed(3)}</h4>
//         <button onClick={handleStart}>startTime</button>
//         <button onClick={stopTime}>stopTime</button>
//         <h1>hello</h1>
//         </>

//     )
// }
// export default Watch