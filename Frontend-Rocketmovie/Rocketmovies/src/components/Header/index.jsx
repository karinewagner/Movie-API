import { Container, Profile, Button } from './styles'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Input } from '../Input'
import { useEffect } from 'react'

export function Header() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input 
        placeholder="Pesquisar pelo título"
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        <div>
          <strong>{user.name}</strong>
          <Button onClick={handleSignOut}>sair</Button>
        </div>
        <Profile to="/profile">
          <img 
            src={avatarUrl}
            alt={`Foto de ${user.name}`}
          />
        </Profile>
      </div>    
    </Container>
  )
} 