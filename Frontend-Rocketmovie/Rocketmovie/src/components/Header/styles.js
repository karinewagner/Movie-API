import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 0 8rem;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.PINK} ;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: 1rem;
    line-height: 2rem;

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Button = styled.button`
  border: none;
  background: none;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`