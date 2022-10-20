import { Container, Content, NewMovie, ItemList } from './style'

import { AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'

export function Home() {
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <div>
            <strong>Meus filmes</strong>
            <NewMovie to="/createmovie">
              <AiOutlinePlus/>
              Adicionar filme
            </NewMovie>
          </div>
          <div className='list'>
            <ItemList>
              <h2>Interestellar</h2>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em 
                futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, 
                a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma...          
              </p>
              <Tag title="Ficção Científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </ItemList>
            <ItemList>
              <h2>Interestellar</h2>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em 
                futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, 
                a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma...          
              </p>
              <Tag title="Ficção Científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </ItemList>
            <ItemList>
              <h2>Interestellar</h2>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em 
                futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, 
                a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma...          
              </p>
              <Tag title="Ficção Científica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </ItemList>
          </div>

        </Content>
      </main>
    </Container>
  )
}