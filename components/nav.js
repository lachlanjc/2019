import { useColorMode } from 'theme-ui'
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Flex,
  NavLink
} from '@theme-ui/components'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Plus, Moon, GitHub } from 'react-feather'

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      color: 'alt',
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none'
      },
      ...sx
    }}
  />
)

const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Cycle Color Mode"
    >
      <Moon size={24} />
    </NavButton>
  )
}

const Material = styled(Box)`
  ${props =>
    props.colorMode === 'dark'
      ? `
        background-color: rgba(0, 0, 0, 0.875);
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
          background-color: rgba(0, 0, 0, 0.75);
          -webkit-backdrop-filter: saturate(180%) blur(12px);
        }
        `
      : `
          background-color: rgba(255, 255, 255, 0.98);
          @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            background-color: rgba(255, 255, 255, 0.75);
            -webkit-backdrop-filter: saturate(180%) blur(16px);
          }
        `};
  @media (prefers-reduced-transparency: reduce) {
    -webkit-backdrop-filter: auto !important;
  }
`

export default () => {
  const [mode] = useColorMode()
  return (
    <Material
      as="nav"
      colorMode={mode}
      sx={{
        color: 'nav',
        py: 3,
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute'
      }}
      key="nav"
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          a: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 1,
            color: 'text',
            textDecoration: 'none',
            mr: [3, 4],
            ':focus,:hover': { color: 'accent' }
          }
        }}
      >
        <Link href="/" passHref>
          <Flex
            as="a"
            sx={{
              alignItems: 'center',
              mr: 'auto !important',
              ':hover img,:focus img': {
                transition: 'box-shadow .125s ease-in-out',
                ':hover,:focus': {
                  boxShadow: '0 0 0 2px'
                }
              }
            }}
          >
            <Avatar
              size={36}
              src="https://github.com/lachlanjc.png"
              alt="Avatar"
              sx={{ mr: 2 }}
            />
            <NavLink>Year in Review</NavLink>
          </Flex>
        </Link>
        <Link href="/music" passHref>
          <NavLink as="a">Music</NavLink>
        </Link>
        <NavButton as="a" href="https://github.com/lachlanjc/2019">
          <GitHub size={24} />
        </NavButton>
        <ColorSwitcher />
      </Container>
    </Material>
  )
}
