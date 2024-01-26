import { useState } from 'react'


const Form = () => {
  const [ query, setQuery ] = useState('')
  const [ error, setError ] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault()

    //no controlada por react
    // const { query } = Object.entries(new window.FormData(event.target))
    // return query // o set query
  }
//forma controlada
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  //validacion con useEffect
  useEffect(()=>{
    if(query === ''){
      setError('No se puede empezar con espacio')
      return 
    }
    if(query.match(/^\d;$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }
  }, [query])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} type="query" placeholder='mi busqueda...' />
        <button type='submit'>Buscar</button>
      </form>
      
    </div>
  )
}

export default Form
