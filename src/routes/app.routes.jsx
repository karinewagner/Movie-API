import { Routes, Route } from 'react-router-dom'
import { MoviesProvider } from '../hooks/movies'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { New } from '../pages/New'

export function AppRoutes() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </MoviesProvider>
  )
}