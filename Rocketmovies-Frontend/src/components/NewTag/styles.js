import styled from 'styled-components'

export const Container = styled.div`
  max-width: 20rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_INPUT2};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE}`: "none"};

  margin: 1.6rem;
  border-radius: 1rem;
  padding: 1.6rem;

  > input {
    height: 5.6rem;
    width: 100%;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    }
  }

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`