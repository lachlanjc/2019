import { useColorMode } from 'theme-ui'
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Flex,
  NavLink
} from '@theme-ui/components'
import Link from 'next/link'
import { Moon, GitHub } from 'react-feather'

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        color: 'primary',
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
      title="Invert color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

export default () => {
  const [mode] = useColorMode()
  return (
    <Box
      as="nav"
      colorMode={mode}
      sx={{
        color: 'white',
        py: 3,
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute'
      }}
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
                boxShadow: '0 0 0 2px'
              }
            }}
          >
            <Avatar
              size={36}
              src="https://github.com/lachlanjc.png"
              alt="Avatar"
              sx={{ mr: 2, transition: 'box-shadow .125s ease-in-out' }}
            />
            <NavLink as="span" sx={{ color: 'inherit !important' }}>
              2019 in Review
            </NavLink>
          </Flex>
        </Link>
        <Link href="/music" passHref>
          <NavLink as="a">Music</NavLink>
        </Link>
        <Link href="/activity" passHref>
          <NavLink as="a">Activity</NavLink>
        </Link>
        <NavButton as="a" href="https://github.com/lachlanjc/2019">
          <GitHub size={24} />
        </NavButton>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}
