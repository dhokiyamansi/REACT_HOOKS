import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme,settheme] = useState('red')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    settheme('blue')
  } 
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    settheme('blue')

  } 
  return (
    <>
     <button  onClick = {decrementCount}>
      -
     </button>
     <span>
      {count}
      {theme}
     </span>
     <button onClick = {incrementCount}>
      +
     </button>
    </>
  )
}

export default App
