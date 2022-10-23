import { Container, Content } from './styles'

import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NewTag } from '../../components/NewTag'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tags => tags !== deleted))
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o filme?")

    if(confirm) {
      //await api.delete(`/movies/${params.id}`)
      handleBack()
    }
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Digite o título do filme.")
    }

    const isRatingValid = rating >= 0 && rating <= 5 && rating !== "";

    if(!isRatingValid) {
      return alert("Digite uma nota para o filme.")
    }

    if(newTag) {
      return alert("Você digitou uma tag no campo de adicionar, mas não clicou em adicionar! Clique para adicionar ou deixe o campo vázio.")
    }

    await api.post("/movies", {
      title,
      description,
      rating,
      tags
    })

    alert("Filme adicionado com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header/>
      <Content>
        <div className='btnBack'>
          <AiOutlineArrowLeft/>
          <ButtonText 
            title="Voltar" 
            onClick={handleBack}>
          </ButtonText>
        </div>
        <div className='content'>

          <h2>Novo filme</h2>

          <div className='newMovieTitle'>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            /> 
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Observação"
            onChange={e => setDescription(e.target.value)}
          />

          <strong>Marcadores</strong>

          <div className='newMovieTags'>
            {
              tags.map((tag, index) => (
                <NewTag 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NewTag 
              isNew 
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag} 
              onClick={handleAddTag}
            />

          </div>
          <div className='finishBtn'>
            <Button 
              title="Excluir filme"
              onClick={handleRemove}
            />
            <Button 
              title="Salvar"
              onClick={handleNewMovie}
            />
          </div>
        </div>
      </Content>
    </Container>

  )
}