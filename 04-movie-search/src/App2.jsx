import { Search } from './mocks/with-results.json'
import './App.css'
import { useState } from 'react'

//hacer el form minuto 40

const App2 = () => {
    const [isSearch, setSearch] = useState('')
  return (
    <div className="page">
      <header>
        <h1>This is Movie App</h1>
        <form >
            <input type="text" />
            <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <ul className="movies">
            {isSearch ? Search.map((movie, idx) => (
                <li key={idx} className="movie">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt="" />
                </li>
            )): (<h1>not found</h1>)}
        </ul>
      </main>
    </div>
  )
}

export default App2
