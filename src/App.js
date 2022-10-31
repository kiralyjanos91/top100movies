import React, { useState , useEffect } from "react"
import "./App.css";

export default function App(){

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '56bd2c0a8bmshb28498e9bd62633p1d4ce4jsn48be7ca34c90',
        'X-RapidAPI-Host': 'evosiss-game-database.p.rapidapi.com'
      }
    };
    
    fetch('https://evosiss-game-database.p.rapidapi.com/getGameList/ldlap3MPTGYdcbsaEYAI2mgmNQmOD5bK/0', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[])

  return(
    <h1>This is the app</h1>
  )
}