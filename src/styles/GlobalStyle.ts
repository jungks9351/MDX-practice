import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

html {
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  font-family: InterVariable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  background-color: ${({ theme }) => theme.bgColors.body};
  color: ${({ theme }) => theme.fontColor.primary};
}

.text-color1 {
  color: ${({ theme }) => theme.fontColor.text1};
}
.text-color2 {
  color: ${({ theme }) => theme.fontColor.text2};
}

button {
  all : unset;
  cursor: pointer;
}
`

export default GlobalStyle
