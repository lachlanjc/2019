import Footer from './footer.mdx'
import { Container, Box } from 'theme-ui'

export default () => (
  <Box
    as="footer"
    sx={{ bg: 'sunken', textAlign: 'center', px: 2, py: 3, mt: [4, 5] }}
  >
    <Container
      sx={{
        maxWidth: 640,
        fontFamily: 'accent',
        p: { color: 'secondary' },
        a: { color: 'primary' }
      }}
    >
      <Footer />
    </Container>
  </Box>
)
