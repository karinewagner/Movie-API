import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }
`