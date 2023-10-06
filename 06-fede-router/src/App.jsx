import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>This is a SPA to create a React Router from scratch.</p>
      <a href="/about">Go to About Me.</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg" alt="profile_pic" />
        <p>Hi! I'm fede and this is a React Router Clone</p>
      </div>
      <a href="/">Home</a>
    </>
  )
}
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && 
      <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
