import { Container, Form, Background } from './styles'

import { AiOutlineMail, AiFillLock} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input icon={AiOutlineMail} type="text" placeholder="E-mail"/>
        <Input icon={AiFillLock} type="password" placeholder="Senha"/>
        <Button title="Entrar"/>
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background/>
    </Container>
  )
}