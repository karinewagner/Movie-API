import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BG_PINK};
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .8rem;

      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  div > svg {
    margin-left: .8rem;
  }

  div:nth-child(4) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 1px;
    right: 1px;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`