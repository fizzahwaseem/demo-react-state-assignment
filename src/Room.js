import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(false);
    let [temp,setTemp] = useState(22);
  return (
    <div 
    className={`room ${isLit? "lit" : "dark"}`}
    >
      This room is {isLit? 'lit' : 'dark'}
      <br/>
      Room Temperature is: {temp}°C
      <br/>
      <button onClick={ ()=>setLit(!isLit) } >Toggle Light</button>
      <br/>
      <button onClick={ ()=>setLit(true)}>On</button>
      <br/>
      <button onClick={ ()=> setLit(false) }> Off </button>
      <br/>
      <button onClick={ ()=> {
        console.log("Increase Temperature arrow function")
        setTemp(++temp)
      }} className="increase">Increase Temperature</button>
      <br/>
      <button onClick={ ()=> {
        console.log("Decrease Temperature arrow function")
        setTemp(--temp)
      }} className="decrease">Decrease Temperature</button>
    
    </div>
  );
}

export default Room;