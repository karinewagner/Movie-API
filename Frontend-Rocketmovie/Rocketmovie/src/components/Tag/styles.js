import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .8rem 1.6rem;
  border-radius: .8rem;
  margin-right: .8rem;

  background-color: ${({ theme }) => theme.COLORS.BG_PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  svg {
    margin-left: 1.6rem;
  }
`