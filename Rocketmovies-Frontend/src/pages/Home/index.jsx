import { Container, Content, NewMovie, ItemList } from './style'

import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'

import { useMovies } from '../../hooks/movies'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Ratings } from '../../components/Ratings'

export function Home() {
  const { movies } = useMovies();

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <div className='myMovies'>
            <strong>Meus filmes</strong>
            <NewMovie to='/new'>
              <AiOutlinePlus/>
              Adicionar filme
            </NewMovie>
          </div>
          <div className='list'>
            {
              movies.map(movie => (             
                <ItemList
                  key={String(movie.id)}
                  onClick={() => handleDetails(movie.id)}
                >
                    <h2>{movie.title}</h2>
                    <div>
                      <Ratings rate={movie.ratings}/>
                    </div>
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