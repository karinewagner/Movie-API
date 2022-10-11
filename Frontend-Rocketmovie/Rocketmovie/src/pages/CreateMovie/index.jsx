import { Container, Content } from './styles'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NewTag } from '../../components/NewTag'
import { Button } from '../../components/Button'

export function CreateMovie() {
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
            <Input placeholder="Título"/> 
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <Textarea placeholder="Observação"/>
          <strong>Marcadores</strong>
          <div className='newMovieTags'>
            <NewTag value="Ficção Ciêntifica"/>
            <NewTag value="" isNew placeholder="Novo marcador"/>
          </div>
          <div className='finishBtn'>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>
        </div>
      </Content>
    </Container>

  )
}