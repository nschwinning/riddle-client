import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
  puzzle?: boolean
  solved?: boolean
}

export const Container = styled.div<IProps>`
  ${({ active, theme, puzzle, solved }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    color: ${solved ? 'red' : (puzzle ? 'black' : '#7d9c54')};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: ${puzzle ? 'bold' : 'normal'};
    font-size: 2rem;
    height: auto;
    justify-content: center;
    min-height: 30px;
    min-width: 30px;
    transition: ${theme.transition};
    user-select: none;
    padding: 0.3em;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
