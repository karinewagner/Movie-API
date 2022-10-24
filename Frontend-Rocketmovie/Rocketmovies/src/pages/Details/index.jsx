import { Container, Content } from './styles'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

import { api } from '../../services/api'

import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Ratings } from '../../components/Ratings'

export function Details() {
  const [data, setData] = useState({})

  const params = useParams()
  const navigate = useNavigate()

  const { user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  })

  return (
    <Container>
      <Header/>

      {
        data && 
        <main>
          <Content>
            <div className='btnBack'>
              <AiOutlineArrowLeft/>
              <ButtonText 
                title='Voltar'
                onClick={handleBack}>
              </ButtonText>
            </div>
            <div className='movieName'>
              <strong>{data.title}</strong>
              <Ratings rate={data.ratings}/>
            </div>
            <div className='author'>
              <img           
                src={avatarUrl}
                alt={`Foto de ${user.name}`}
              />
              <h2>{`Por ${user.name}`}</h2>
              <MdOutlineWatchLater/>
              <h2>{data.created_at}</h2>
            </div>
            {
              data.tags &&
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}/>
                ))
            }
            <div className='paragraph'>
              <p>{data.description}</p>
            </div>
          </Content>
        </main>
      }
    </Container>
  )
} 
