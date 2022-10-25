import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  text-align: center;

  > h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    margin: 4.8rem 0;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    margin-top: .8rem;
  }

  > a {
    margin: 5rem 12rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover; 
`