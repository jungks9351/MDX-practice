import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

html {
  font-size: 10px;
}

body {
  font-family: 'Jalnan';
  padding: 0 20rem;
  background-color: ${({ theme }) => theme.bgColors.body};
  color: ${({ theme }) => theme.fontColor};
}

button {
  all : unset;
  cursor: pointer;
}
`

export default GlobalStyle
