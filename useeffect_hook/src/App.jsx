import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)


  const handleResize =() =>{
    setwindowWidth(window.innerWidth)
  }
  useEffect( () =>{
      window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize)
    }

    },[])

  return (
    <>
    {windowWidth}
    </>
  )
}

export default App
