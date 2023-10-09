import { useEffect, useState } from 'react'
import './App.css'

const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

function navigate (href) {
  window.history.pushState({}, '',href)
  const navigationEvent = new Event('pushstate')
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>This is a SPA to create a React Router from scratch.</p>
      <button onClick={() => navigate('/about')}>Go to About Me.</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg" alt="profile_pic" />
        <p>Hi! I&apos;m fede and this is a React Router Clone</p>
      </div>
      <button onClick={() => navigate('/')}>Home</button>
    </>
  )
}

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
      <HomePage />}
      {currentPath === '/about' && 
      <AboutPage />}
    </main>
  )
}

export default App
