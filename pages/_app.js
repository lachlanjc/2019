import React from 'react'
import App from 'next/app'
import { ThemeProvider, ColorMode } from 'theme-ui'
import { Global } from '@emotion/core'

import theme from '../components/theme'
import Meta from '../components/meta'
import NProgress from '../components/nprogress'
import Nav from '../components/nav'
import Footer from '../components/footer'

class Root extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Meta />
        <style>{`
          @font-face {
            font-family: 'Roobert';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('https://cdn.glitch.com/ead942eb-5f14-487b-a118-4759cfc04f43%2FRoobert-Medium.woff2?v=1570659234070')
              format('woff2');
          }
        
          @font-face {
            font-family: 'Roobert';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('https://cdn.glitch.com/ead942eb-5f14-487b-a118-4759cfc04f43%2FRoobert-Bold.woff2?v=1570659237353')
              format('woff2');
          }

          @font-face {
            font-family: 'iA Quattro';
            src: url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Regular.woff2')
                format('woff2'),
              url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Regular.woff')
                format('woff'),
              url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Regular.eot')
                format('truetype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        
          @font-face {
            font-family: 'iA Quattro';
            src: url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.woff2')
                format('woff2'),
              url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.woff')
                format('woff'),
              url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.eot')
                format('truetype');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
        <ThemeProvider theme={theme}>
          <ColorMode />
          <Global styles={theme => ({ body: theme.styles.root })} />
          <NProgress color={theme.colors.primary} />
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    )
  }
}

export default Root
