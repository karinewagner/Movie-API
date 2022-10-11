import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  .content {
    grid-area: content;
    height: 60vh;
    overflow-y: auto;
  }
    .content::-webkit-scrollbar {
    width: 1rem;
  }

    .content::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1rem;       /* roundness of the scroll thumb */
  }
`

export const Content = styled.div`
  width: 113.7rem;
  margin: 0 auto;

  > a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: .8rem;

      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};

      margin: 4rem 0 2.4rem;
    }

  > h2 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .newMovieTitle {
    display: flex;
    gap: 4rem;
    margin: 4rem 0;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }  
  
  textarea {
    margin-bottom: 4rem;
  }

  .newMovieTags {
    width: 100%;
    height: 8.8rem;
    margin: 2.4rem 0;

    border-radius: .8rem;

    display: flex;
    justify-content: flex-start;
    text-align: center;

    background-color: ${({ theme }) => theme.COLORS.BG_INPUT1};
  }

  .finishBtn {
    display: flex;
    gap: 4rem;

    > button {
      width: 53.7rem;
      border-radius: .8rem;

      &:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BG_INPUT1};
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      &:nth-child(2) {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BG_INPUT1};
      }
    }
  }
`