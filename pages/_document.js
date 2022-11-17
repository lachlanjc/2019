import { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <style>{`
          :root { supported-color-schemes: light dark; }
          body { overflow-x: hidden; }
        `}</style>
      </Head>
      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
