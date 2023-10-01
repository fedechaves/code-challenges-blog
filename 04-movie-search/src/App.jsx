import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(
      new window.FormData(event.target))
    console.log(query)
  }

  return (
    <div className='page' onSubmit={handleSubmit}>
      <header>
      <h1>Movie Finder</h1>
        <form className='form'>
          <input name='query' placeholder='Avengers, Star Wars, The Matrix...' />
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
