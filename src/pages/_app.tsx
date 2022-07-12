import type { AppProps } from 'next/app'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'

import '../../public/static/font/index.css'
import Header from '../components/Header'
import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
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
        <Header />
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

  background-color: ${({ theme }) => theme.colors.bgColors.main};
`
export default MyApp
