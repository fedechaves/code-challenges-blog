import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'
import  Home  from './pages/Home'
import About from './pages/About'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  }, [])

  return (
    <main>
      {currentPath === '/' && 
      <Home />}
      {currentPath === '/about' && 
      <About />}
    </main>
  )
}

export default App
