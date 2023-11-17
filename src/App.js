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
/*import React,{useState,useEffect} from "react";
import './App.css'

const URL ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const App= () =>{
  const [UsersData,setUsersData] = useState([]);
  const [searchTerm,setSearchterm] = useState('');
  const [loading, setLoading] =useState(false);
  const [isError, setIsError] = useState({status:false,msg:''})

  const fetchData = async (apiURL) => {
    setLoading(true)
    setIsError({status:false,msg:''})
    try {
      const response = await fetch(apiURL);
      const { drinks} = await response.json();
      setUsersData(drinks)
      setLoading(false)
      setIsError({status:false,msg:''})
      if(!drinks){
        throw new Error("Data not found")
      }
    } catch (error){
      setLoading(false)
      setIsError({status:true,msg:error.message || "something went wrong..."})
    }
  }
    useEffect(()=>{
      const correctURL = ${URL}${searchTerm}
      fetchData(correctURL)
    },[searchTerm])
    return (
      <>
      <div className='container' >
        <div className='parent'>
          <input type="text" name='search' placeholder='search' value={searchTerm} onChange={(e)=> setSearchterm(e.target.value)} />

      </div>
      <hr />
      {loading && !isError?.status && <h5>loading....</h5>}
      {isError?.status && <h5 style={{color:'red'}}>{isError.msg}</h5>}
      {
        !loading && !isError?.status && <ul>
          {
            UsersData.map((eachDrink)=>{
              const {strDrinkThumb,strDrink, idDrink} = eachDrink;
              return <li key={ idDrink}>
                <div className='image'> <img src={strDrinkThumb} alt=""/></div>
                <div className='brandName'>{strDrink}</div>
              </li>
            })
          }
        </ul>
      }
      </div>
      </>

    )

}
export default App
    
    
  

// import App from "./App"
/*import React,{useRef,useState} from "react"

const Watch = ()=>{
    const [startTime, setStartTime] = useState(null)
    const [now,setNow] = useState(null)
    const intervalRef =useRef(null)

    function handleStart(){
        setStartTime(Date.now())
        setNow(Date.now())

        intervalRef.current =setInterval(()=>{
            setStartTime(Date.now())
        },10)

    }
    function stopTime(){
        clearInterval(intervalRef.current)
    }
    let secondsPassed = 0;
    if(startTime !== null && now !==null){
        secondsPassed = (startTime - now)/1000
    }
    return(
        <>
        <h4>{secondsPassed.toFixed(3)}</h4>
        <button onClick={handleStart}>startTime</button>
        <button onClick={stopTime}>stopTime</button>
        <h1>hello</h1>
        </>

    )
}
export default Watch;
/*import { useRef } from "react"

function App() {
  let ref=useRef(0)

  function handlClick() {
    ref.current = ref.current +1
    alert("clicked" + ref.current + "times")

  }
  return(
    <div className="container">
      <button onClick={handlClick}>share the post</button>

      </div>
  )
}
export default App
/*import './App.css';
import React, { useReducer } from 'react';

const intialization = {count : 0}

function reducer(state,action){
  switch (action.type) {
    case 'increament' :
      return {count : state.count + 1}
      case 'decreament' :
        return {count : state.count - 1}
        default :
        throw new Error()
  }
}


function App() {

  const [state,dispatch] = useReducer(reducer,intialization)

  return(
    <div className='container'>
      count : {state.count}
      <button onClick={()=>dispatch({type : 'decreament'})}>-</button>
      <button onClick={()=>dispatch({type : 'increament'})}>+</button>
      </div>
  )
}
export default App
// import React,{useReducer,useContext} from 'react'
/*import React from 'react';
import ChildTwo from './Childtwo'


export const UserContext=React.createContext()

function App() {
return(
  <>
  <div className="App">
    <UserContext.Provider value={'coming from useContext'}>
      <ChildTwo/>
    </UserContext.Provider>

  </div>
  </>
)
}

export default App




  

/*function App(){
  const URL = 'https://jsonplaceholder.typicode.com/users'

 const [UsersData, setUsersData] = useState([])
 const fetchUsersData = async (apiURL) =>{
  const response = await fetch(apiURL)
  const data = await response.json()
    setUsersData(data)
  }
  useEffect(()=>{
    fetchUsersData(URL)
  },[])

  return(
    <div className='container'>
      <ul>
        {
          UsersData.map((eachObj)=>{
            const {id,name,username,email} = eachObj;
             
               return( 
              <li key={id}>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
                
              </li>
               )
        })
      }
          
        
      </ul>     
    </div>
  )
 
 

           
 /* return(
    <div className='container'>
      <ul>
        {
          data.map((eachObj)=>{
            const {imageURL, restaurentName,cuisines,rating,id} = eachObj;
             src={imageURL} alt="don"/></div>
                <div>{restaureturn(
              <li key={id}>
                <div><imgrentName}</div>
                <div>{cuisines}</div>
                <div>{rating}</div>
                <button onClick={() => deleteHandler(id)}>Delete</button>
              </li>
            )
          })
        }
      </ul>     
    </div>

    

  )
    }
/*  const Restaurent = (props) => {
  return (
    <>
    <div className='parent'>
      <div className='child'>
    <img src= {props.imageURL} alt="restaurent" />
    <h4>{props.restaurentname}</h4>
    <h5>{props.cuisines}</h5>
    <h6>{props.rating}</h6>
    </div>
    </div>
    </>
  )
  }*/  
  
