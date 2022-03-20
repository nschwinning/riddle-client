import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  margin: 10px 0;
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;
  `}
`
