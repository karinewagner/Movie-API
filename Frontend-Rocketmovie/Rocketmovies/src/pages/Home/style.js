import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
      "header"
      "content";
`

export const Content = styled.div`
  width: 114rem;
  margin: 0 auto;

  > .teste {
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 1.5rem 0 3rem;

    > strong {
      font-weight: 400;
      font-size: 3.2rem;
        
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .list {
    grid-area: content;
    height: 60vh;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
  }

  .list::-webkit-scrollbar {
    width: 1rem;
  }

  .list::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;
  }
`
export const NewMovie = styled(Link)`
  width: 20.7rem;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const ItemList = styled.li`
  list-style: none;

  width: 100%;
  height: 22.5rem;

  background-color: ${({ theme }) => theme.COLORS.BG_PINK};
  border-radius: 1.6rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h2  {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: .8rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    margin: 1.5rem 0 3rem;
    text-align: justify;
  }

  > span {
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`