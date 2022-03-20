import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
    ${({ theme }) => css`
      html {
        height: 100%;

        body {
          box-sizing: border-box;
          color: ${theme.colors.black};
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
          height: 100%;
          margin: 0;
          background: ${theme.colors.white};
        }
      }
    `}
`
