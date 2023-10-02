import { useEffect, useState, useRef } from "react"


export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if (isFirstInput.current){
        isFirstInput.current = search === ''
        return
      }
      if(search === ''){
        setError('no se puede buscar pelicula vacia')
        return
      }
  
      if(search.match(/^\d+$/)) {
        setError('No se puede buscar una pel;ícula con numero')
        return
      }
  
      if(search.length < 3) {
        setError('la busqueda debe tener al menos 3 caracteres')
        return
      }
  
      setError(null)
  
    },[search])

    return { search, updateSearch, error }
  }