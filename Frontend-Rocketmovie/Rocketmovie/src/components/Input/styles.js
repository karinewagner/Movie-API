import styled from 'styled-components'

export const Container = styled.div`
  max-width: 63rem;
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BG_INPUT2};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin: 3rem 6.4rem;
  border-radius: 1rem;

  > input {
    max-width: 63rem;
    width: 100%;
    height: 5.6rem;

    padding: 1.9rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: transparent;
    border: 0;

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    svg {
      margin-left: 1.6rem;
    }
  }
`