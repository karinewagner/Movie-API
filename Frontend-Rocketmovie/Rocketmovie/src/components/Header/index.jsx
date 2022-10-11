import { Container, Profile,Button } from './styles'
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
          <strong>Karine Wagner</strong>
          <Button>sair</Button>
        </div>
        <img 
          src="https://github.com/karinewagner.png" 
          alt="Foto do usuário"
        />
      </Profile>      
    </Container>
  )
}