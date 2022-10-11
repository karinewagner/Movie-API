import { Container, Form, Avatar } from './styles'

import { AiOutlineArrowLeft, AiOutlineUserAdd, AiOutlineMail, AiOutlineUnlock, AiOutlineLock, AiOutlineCamera } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <AiOutlineArrowLeft/>
          <p>Voltar</p> 
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/karinewagner.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <AiOutlineCamera/>
            <input id="avatar" type="file"/>
          </label>
        </Avatar>
        <Input icon={AiOutlineUserAdd} type="text" placeholder="Nome do usuário"/>
        <Input icon={AiOutlineMail} type="text" placeholder="E-mail do usuário"/>
        <Input icon={AiOutlineUnlock} type="password" placeholder="Senha atual"/>
        <Input icon={AiOutlineLock} type="password" placeholder="Nova senha"/>
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}