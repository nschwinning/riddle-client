import styled, { css } from 'styled-components'

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.navbar};
    text-align: center;
    margin-top: 0;
  `}
`
