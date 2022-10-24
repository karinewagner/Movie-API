import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: .5rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK}
  }
`
