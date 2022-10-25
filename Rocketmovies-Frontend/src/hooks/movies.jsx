import { createContext, useContext, useState } from 'react'

import { api } from '../services/api'

export const MovieContext = createContext({})

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([])

  async function fetchMovies(search) {
    const response = await api.get(`/movies?title=${search}`)
    setMovies(response.data)
  }

  return (
    <MovieContext.Provider value={{ 
      movies,
      fetchMovies,
    }}>
      { children }
    </MovieContext.Provider>
  )
}

function useMovies() {
  const context = useContext(MovieContext)

  return context
}

export { MoviesProvider, useMovies }