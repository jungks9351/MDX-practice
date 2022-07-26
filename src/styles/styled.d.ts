import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColors: {
      body: string
      main: string
    }
    fontColor: string
    border: {
      color: string
    }
  }
}
