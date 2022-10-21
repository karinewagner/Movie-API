import { Container, Content } from './styles'

import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NewTag } from '../../components/NewTag'
import { Button } from '../../components/Button'

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

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

  async function handleNewMovie() {
    if(!title) {
      return alert("Digite o título do filme.")
    }

    //if(ranting) {
    //  return alert("Digite uma nota para o filme.")
    //}

    if(newTag) {
      return alert("Você digitou uma tag no campo de adicionar, mas não clicou em adicionar! Clique para adicionar ou deixe o campo vázio.")
    }

    await api.post("/movies", {
      title,
      description,
      tags
    })

    alert("Filme adicionado com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header/>
      <Content>
        <Link to="/">
          <AiOutlineArrowLeft/>
          <p>Voltar</p> 
        </Link>

        <div className='content'>

          <h2>Novo filme</h2>

          <div className='newMovieTitle'>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            /> 
            <Input 
              placeholder="Sua nota (de 0 a 5)"
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