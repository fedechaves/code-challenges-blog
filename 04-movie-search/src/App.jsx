import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
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
        {hasMovies ?(
          <ul>
            {movies.map(movie => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ): (
          // eslint-disable-next-line react/no-unescaped-entities
          <p>Haven't find any movies for this search</p>
        )}
      </main>
    </div>
  )
}

export default App
