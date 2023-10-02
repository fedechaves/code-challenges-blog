import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const [sort, setSort ] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleSort =() => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value) 
  }

  return (
    <div className='page'>
      <header>
      <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' placeholder='Avengers, Star Wars, The Matrix...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red'}}>{error}</p> }
      </header>
      <main>
        {loading ? <p>cargando...</p> : 
        <Movies movies={ movies} />
        } 
      </main>
    </div>
  )
}

export default App
