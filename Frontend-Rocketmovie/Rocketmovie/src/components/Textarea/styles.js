import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({ theme }) => theme.COLORS.BG_INPUT2};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 1.9rem;

  &:placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`