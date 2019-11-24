import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Meta from '../components/meta'
import Layout from '../components/layout'
import theme from '../components/theme'

const fonts = `
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
    src: url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.woff2')
        format('woff2'),
      url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.woff')
        format('woff'),
      url('https://2019.hackpenn.com/quattro/iAWriterQuattroS-Bold.eot')
        format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`

export default class extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Meta />
        <Head>
          <style dangerouslySetInnerHTML={{ __html: fonts }} />
        </Head>
        <ThemeProvider theme={theme}>
          <Global
            styles={theme => ({
              '*': {
                boxSizing: 'border-box'
              },
              body: {
                fontFamily: theme.fonts.body,
                fontSize: theme.fontSizes[1],
                lineHeight: theme.lineHeights.body,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                margin: 0,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
              }
            })}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    )
  }
}
