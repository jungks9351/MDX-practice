import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  bgColors: {
    body: '#ffffff',
    main: '#ffffff',
  },
  fontColor: {
    primary: '#000000',
    text1: '#535661',
    text2: '#031f73',
  },
  border: {
    color: '#ecedf1',
  },
}

export const darkTheme: DefaultTheme = {
  bgColors: {
    body: '#000000',
    main: '#000000',
  },
  fontColor: {
    primary: '#ffffff',
    text1: '#a9adc1',
    text2: '#1340c1',
  },
  border: {
    color: '#ffffff',
  },
}
