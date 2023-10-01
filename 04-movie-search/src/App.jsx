import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

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
        <Movies movies={ movies} />
      </main>
    </div>
  )
}

export default App
