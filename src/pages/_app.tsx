import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import '../../public/static/font/index.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
