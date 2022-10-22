import { Container, Content, NewMovie, ItemList } from './style'

import { AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'


import { useMovies } from '../../hooks/movies'

export function Home() {
  const { movies } = useMovies();

  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <div>
            <strong>Meus filmes</strong>
            <NewMovie to="/new">
              <AiOutlinePlus/>
              Adicionar filme
            </NewMovie>
          </div>
          <div className='list'>
            {
              movies.map(movie => (             
                <ItemList
                  key={String(movie.id)}
                >
                  <h2>{movie.title}</h2>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <p>{movie.description}</p>
                    {
                      movie.tags.map(tag => (
                        <Tag 
                          key={String(tag.id)}
                          title={tag.name}/>
                      ))
                    }
                </ItemList>
              ))
            }
          </div>
        </Content>
      </main>
    </Container>
  )
}