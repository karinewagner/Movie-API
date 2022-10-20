import { Container, Form, Background } from './styles'

import { AiOutlineMail, AiFillLock} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { singIn } = useAuth()

  function handleSingIn() {
    singIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          icon={AiOutlineMail} 
          type="text"
          onChange={e => setEmail(e.target.value)} 
        />
        <Input 
          placeholder="Senha"
          icon={AiFillLock} 
          type="password"
          onChange={e => setPassword(e.target.value)} 
        />

        <Button title="Entrar" onClick={handleSingIn}/>

        <Link to="/register">Criar conta</Link>

      </Form>
      <Background/>
    </Container>
  )
}