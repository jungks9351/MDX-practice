import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColors: {
      body: string
      main: string
    }
    fontColor: {
      primary: string
      text1: string
      text2: string
    }
    border: {
      color: string
    }
  }
}
