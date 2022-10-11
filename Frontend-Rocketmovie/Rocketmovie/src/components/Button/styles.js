import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`