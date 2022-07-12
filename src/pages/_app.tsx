import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import '../../public/static/font/index.css'
import SunIcon from '../../public/static/images/sun_icon.svg'
import MoonIcon from '../../public/static/images/moon_icon.svg'

import Header from '../components/Header'
import NavContainer from '../components/nav/NavContainer'

import { darkTheme, lightTheme } from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [themeMode, setThemeMode] = useState('')

  const handleThemeMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (localStorage.getItem('theme'))
      setThemeMode(localStorage.getItem('theme'))
  }, [])

  useEffect(() => {
    document.body.dataset.theme = themeMode
    localStorage.setItem('theme', themeMode)
  }, [themeMode])

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <meta name="description" content="My First Static Blog" />
        <meta name="keywords" content="nextjs,static,website" />
        <title>Blog</title>
      </Head>
      <GlobalStyle />
      <Container>
        <Header>
          <NavContainer />
          <button onClick={handleThemeMode}>
            {themeMode === 'light' ? <SunIcon /> : <MoonIcon />}
          </button>
        </Header>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  width: calc(100%-2rem);
  height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;

  background-color: ${({ theme }) => theme.bgColors.main};
`

export default MyApp
