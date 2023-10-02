import { useRef, useState, useMemo } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies ({ search, sort }) {
    const [movies, setMovies ] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError ] = useState(null)
    const previousSearch = useRef(search) 

    const getMovies = async () => {
      if(search === previousSearch.current) return

      try{
      setLoading(true)
      setError(null)
      const newMovies = await searchMovie({ search })
      setMovies(newMovies)
      }catch(e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    const sortedMovies = useMemo(() => {
      sort 
    ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    : movies
    }, [sort, movies])
    return { movies: sortedMovies, loading, getMovies, error}
  }