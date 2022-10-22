import { Container, Profile, Button } from './styles'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Input } from '../Input'


import { useContext, useState, useEffect } from 'react'
import { MovieContext } from '../../hooks/movies'

export function Header() {
  const { fetchMovies } = useContext(MovieContext)
  const [search, setSearch] = useState("")

  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  useEffect(() => {
      fetchMovies(search)
    }, [search])

  function handleSignOut() {
    navigation("/")
    signOut()
  }

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