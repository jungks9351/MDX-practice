import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import '#static/font/index.css'
import { darkTheme, lightTheme } from '@styles/theme'
import GlobalStyle from '@styles/GlobalStyle'

import Header from '@components/common/Header'
import Container from '@components/common/Container'

import useThemeMode from '@hooks/useThemeMode'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { themeMode, handleThemeMode } = useThemeMode()

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="My First Static Blog" />
        <meta name="keywords" content="nextjs,static,website" />
        <title>Blog</title>
      </Head>
      <GlobalStyle />
      <Container>
        <Header themeMode={themeMode} handleThemeMode={handleThemeMode} />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
