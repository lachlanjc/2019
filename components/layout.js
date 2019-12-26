import { Box, Flex, Text, Link as A } from '@theme-ui/components'
import { Styled, useColorMode } from 'theme-ui'
import Link from 'next/link'
import Avatar from './avatar'

const ColorButton = ({ mode, ...props }) => (
  <Box
    as="button"
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: [3, 4],
      position: 'absolute',
      right: 0,
      top: 0,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      ':hover, :focus': {
        color: 'primary',
        outline: 'none'
      }
    }}
  >
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
    </svg>
  </Box>
)

const Article = props => (
  <Box
    as="main"
    {...props}
    sx={{
      'p::first-letter': {
        initialLetter: 3
      }
    }}
  />
)

export default props => {
  const [mode, setMode] = useColorMode()

  return (
    <>
      <ColorButton
        onClick={e => {
          const next = mode === 'dark' ? 'light' : 'dark'
          setMode(next)
        }}
      />
      <Article>{props.children}</Article>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto',
          fontSize: 0,
          mt: [3, 4],
          textAlign: 'center',
          a: { fontSize: 1 }
        }}
      >
        <A href="https://lachlanjc.me" target="_blank" variant="styles.navitem">
          By @lachlanjc
        </A>
      </Box>
    </>
  )
}
