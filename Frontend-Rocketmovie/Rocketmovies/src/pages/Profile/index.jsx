import { Container, Form, Avatar } from './styles'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineUserAdd, AiOutlineMail, AiOutlineUnlock, AiOutlineLock, AiOutlineCamera } from 'react-icons/ai'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function Profile() {
  const { user, updateProfile} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <div className='btnBack'>
            <AiOutlineArrowLeft/>
            <ButtonText 
              title="Voltar" 
              onClick={handleBack}>
            </ButtonText>
          </div>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <AiOutlineCamera/>
            <input 
              id="avatar" 
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input 
          placeholder="Nome do usuário"
          icon={AiOutlineUserAdd} 
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail do usuário"
          icon={AiOutlineMail} 
          type="text" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha atual"
          icon={AiOutlineUnlock} 
          type="password" 
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova senha"
          icon={AiOutlineLock} 
          type="password" 
          onChange={e => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}