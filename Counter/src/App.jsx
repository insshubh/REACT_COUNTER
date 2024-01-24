import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const addByOne = () =>{
    setCount(count+1);
  }
 const decreaseByOne  = () =>{
  setCount(count-1);
 }

  return (
    <>
      <div>
        <h1>Counter Value : {count}</h1>
        <button onClick={addByOne}>Increment ++{count} </button>
        <button onClick={decreaseByOne}>Decrement --{count} </button>
      </div>
      
    </>
  )
}

export default App
