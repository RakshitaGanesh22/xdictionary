import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
function App() {
  let Dictionary=
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  
  let[value,setValue]=useState("");
  let[Defination,setDefine]=useState("");
  function HandleChange(event){
    setValue(event.target.value);
  }
  function HandleClick(){
    setDefine("");
    let flag=0;
    for(let i=0;i<Dictionary.length;i++){
      if(Dictionary[i].word.toLowerCase()==value.toLowerCase()){
        setDefine(Dictionary[i].meaning);
        flag=1;
      }

    }
    if(flag!==1){
      setDefine('Word not found in the dictionary.');
    }
  }
  return (
    <div className="App">
      <input type="text" onChange={HandleChange}/>
      <button type="submit" onClick={HandleClick}>Search</button>
      <h3>Defination:</h3><br/>
      <p>{Defination}</p>

    </div>
  );
}

export default App;
