import './App.css'

function Home () {
  return (
    <>
      <h1>Home</h1>
      <p>This is a SPA to create a React Router from scratch.</p>
      <a href="/about">Go to About Me.</a>
    </>
  )
}

function About() {
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


  return (
    <>
      <Home />
      <About />
    </>
  )
}

export default App
