import * as React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'

import '../components/fonts.css'
import theme from '../components/theme'
import Meta from '../components/meta'
import NProgress from '../components/nprogress'
import Nav from '../components/nav'
import Footer from '../components/footer'

class Root extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <NProgress color={theme.colors.accent} />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Root
