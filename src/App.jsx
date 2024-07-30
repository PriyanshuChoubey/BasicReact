import { useState } from 'react'  //this is a hook "useState"
//this hook help to propagate the change in UI

import './App.css'

function App() {

  //here counter is the variable and setCounter is a function that control the counter variable
  //here we can set any name as per our requirement
  let [counter, setCounter] = useState(15)    //here 15 is the default/initial value and this hook will update the UI

  // let counter = 5
  const addValue = ()=>{
    if(counter<20)
      counter = counter+1;
    setCounter(counter)   //or we can write counter + 1 by skipping aboove line
  }

  const removeValue = ()=>{
    counter = counter-1;
    if(counter<=0)
    {
      counter = 0
    }    
    setCounter(counter)

  }
  return (
    <>
      <h1>COUNTER</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>   
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
