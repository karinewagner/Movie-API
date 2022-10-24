import { Container, Form, Background } from './styles'

import { useState } from 'react'
import { AiOutlineUserAdd, AiOutlineMail, AiFillLock, AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api.post('/users', { name, email, password })
    .then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate(-1)                                    //
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar!')
      }

    })
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input 
          placeholder='Nome'
          icon={AiOutlineUserAdd} 
          type='text'
          onChange={e => setName(e.target.value)} 
        />
        <Input 
          placeholder='E-mail'
          icon={AiOutlineMail} 
          type='text' 
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder='Senha'
          icon={AiFillLock} 
          type='password'
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title='Cadastrar'
          onClick={handleSignUp}
        />

        <div className='btnBack'>
          <AiOutlineArrowLeft/>
          <ButtonText 
            title='Voltar para o login'
            onClick={handleBack}>
          </ButtonText>
        </div>

      </Form>
      <Background/>
    </Container>
  )
}