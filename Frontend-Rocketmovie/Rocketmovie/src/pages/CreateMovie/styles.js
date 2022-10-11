import styled from 'styled-components'

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
  width: 1137px;
  height: 100vh;

  margin: 0 auto;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .newMovieTitle {
    display: flex;

  }

  .newMovieTags {
    width: 100%;
    height: 88px;

    display: flex;
    text-align: center;

    background-color: ${({ theme }) => theme.COLORS.BG_INPUT1};

    > span {
      height: 56px;
      margin: 16px;

      border-radius: 10px;

      &:last-child {
        background-color: ${({ theme }) => theme.COLORS.BG_INPUT1};
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        border: none;
        border-color: ${({ theme }) => theme.COLORS.GRAY_100};
        border-style: dashed;
      }
    }
  }

  .finishBtn {
    display: flex;
    gap: 40px;

    > button {
      width: 537px;
      border-radius: 8px;

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