import { Container, Content } from './styles'
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function CreateMovie() {
  return (
    <Container>
      <Header/>
      <Content>
        <ButtonText icon={AiOutlineArrowLeft} title="Voltar"/>
        <strong>Novo filme</strong>
        <div className='newMovieTitle'>
          <Input/>
          <Input/>
        </div>
        <Input/>
        <span>Marcadores</span>
        <div className='newMovieTags'>
          <Tag title="React" icon={FaTimes}/>
          <Tag title="Novo Marcador" icon={AiOutlinePlus}/>
        </div>
        <div className='finishBtn'>
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>
        </div>
      </Content>
    </Container>

  )
}