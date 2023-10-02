export const searchMovies = async({ search }) => {
    if(search === '') return null 

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}`)
        const json = await res.json()
        
        const movies = json.Search

        return  movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }))

    }catch(err) {
        throw new Error('Error searching movies')
    }  
}