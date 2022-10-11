import { Container, Form, Background } from './styles'

import { AiOutlineUserAdd, AiOutlineMail, AiFillLock, AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input icon={AiOutlineUserAdd} type="text" placeholder="Nome"/>
        <Input icon={AiOutlineMail} type="text" placeholder="E-mail"/>
        <Input icon={AiFillLock} type="password" placeholder="Senha"/>
        <Button title="Cadastrar"/>
        <Link to="/">
          <AiOutlineArrowLeft/>
          <p>Voltar para o login</p> 
        </Link>
      </Form>
      <Background/>
    </Container>
  )
}