import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
      <h1>Movie Finder</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        Aquí los resultados...
      </main>
    </div>
  )
}

export default App
