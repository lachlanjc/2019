import { Box, Heading } from '@theme-ui/components'

export default ({ bg = 'text', color = 'textInverse', sx = {}, children }) => (
  <Box
    as="header"
    sx={{
      pt: 6,
      pb: 5,
      px: 3,
      mb: [4, 5],
      color,
      bg,
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
