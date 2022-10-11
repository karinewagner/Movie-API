import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 4rem 0;
  }
`

export const Content = styled.div`
  max-width: 114rem;
  margin: 0 auto;

  > a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: .8rem;

      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    
  .movieName {
    display: flex;
    align-items: center;
    margin: 2.4rem 0;
      
    > strong {
      font-size: 3.6rem;
      line-height: 4.7rem;
      font-weight: 500;
      margin-right: 1rem;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  
  .author {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h2 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      margin: 0 .8rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .paragraph {
    height: 40vh;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    margin-top: 4rem;
  }

  .paragraph::-webkit-scrollbar {
    width: 1rem;
  }

  .paragraph::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;       /* roundness of the scroll thumb */
  }

  > P {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    text-align: justify;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

