import { Movies } from './mocks/with-results.json'
import './App.css'
import { useEffect, useState } from 'react'

//hacer el form minuto 40

const App2 = () => {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)

    //version no controlada
    // function handleSubmit(event) {
    //   event.preventDefault()
    //   const { query } = Object.fromEntries(new window.FormData(event.target))
    //   console.log(query)

    //   if(query === '') return

    // }

    function handleSubmit(event) {
      let newQuery = event.target.value
      event.preventDefault(newQuery)
      //solo en version no contralada
      // const { query } = Object.fromEntries(new window.FormData(event.target))
      // console.log(query)
      if(newQuery === ''){
        setError('cannot search empty value')
        return
      }

      if(newQuery.match(/^\d+$/)) {
        setError('cannot search movie with number')
        return
      }

      if(newQuery.length < 3){
        setError('movie has to be greater than 3 words')
      }

      setError(null)


    }
  //useRef 48'
    function handleChange(event) {
      const newSearch = event.target.value
      if(newSearch.startWith(' ')) return
      updateSearch(event.target.value)
    }

    // //validaci;ón con useEffect
    // useEffect(()=>{
    //   if(search === ''){
    //     setError('cannot search empty value')
    //     return
    //   }

    //   if(search.match(/^\d+$/)) {
    //     setError('cannot search movie with number')
    //     return
    //   }

    //   if(search.length < 3){
    //     setError('movie has to be greater than 3 words')
    //   }

    //   setError(null)
    // }, [search])

  return (
    <div className="page">
      <header>
        <h1>This is Movie App</h1>
        {/* <form className="form" onSubmit={handleSubmit} >
            <input name="query" type="text" />
            <button type='submit'>Search</button>
        </form> */}
        <form className="form" onSubmit={handleSubmit} >
            <input onChange={handleChange} name="query" type="text" />
            <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: "red"}}>{error}</p>}
      </header>

      <main>
        <ul className="movies">
            {Movies ? Movies.map((movie, idx) => (
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
