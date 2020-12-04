import { useColorMode, Box, Heading } from 'theme-ui'

const Header = ({ bg = 'primary', color = 'white', sx = {}, children }) => {
  const dark = useColorMode()[0] === 'dark'
  return (
    <Box
      as="header"
      sx={{
        pt: 6,
        pb: 5,
        px: 3,
        mb: [4, 5],
        color: dark ? bg : color,
        bg: dark ? 'darkless' : bg,
        ...sx
      }}
    >
      <Heading
        as="h1"
        sx={{
          fontSize: [5, 6],
          textAlign: 'center',
          span: {
            WebkitTextStroke: 'currentColor',
            WebkitTextStrokeWidth: '2px',
            WebkitTextFillColor: 'transparent'
          }
        }}
      >
        <span>2019:</span> {children}
      </Heading>
    </Box>
  )
}

export default Header
