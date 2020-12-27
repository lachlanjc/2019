import Content from './footer.mdx'
import Ring from './activity/ring'
import BGImg from './bg-img'
import { Container, Box, Grid, Card } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Headphones } from 'react-feather'

const Footer = () => {
  const { pathname } = useRouter()
  return [
    <Grid
      key="navCards"
      as="section"
      variant="layout.container"
      gap={[3, 4]}
      columns={[null, 2]}
      sx={{
        my: [4, 5],
        a: {
          variant: 'cards.interactive',
          p: [4, 4],
          bg: 'black',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 128,
          '> svg': {
            position: 'absolute',
            top: 3,
            right: 3,
            opacity: 0.875
          }
        },
        h2: {
          variant: 'text.headline',
          textAlign: 'left',
          mb: 0
        }
      }}
    >
      {pathname !== '/' && (
        <Link href="/" passHref>
          <Card as="a" sx={{ overflow: 'hidden' }}>
            <BGImg src="/cover.jpg" width={2224} height={1251} alt="New York at sunset, cover image" />
            <h2>Story</h2>
          </Card>
        </Link>
      )}
      {pathname !== '/activity' && (
        <Link href="/activity" passHref>
          <Card as="a">
            <Ring size={96} />
            <h2>Activity</h2>
          </Card>
        </Link>
      )}
      {pathname !== '/music' && (
        <Link href="/music" passHref>
          <Card
            as="a"
            sx={{
              bg: 'music',
              backgroundImage: 'linear-gradient(#fa5b73, #fa233b)'
            }}
          >
            <Headphones size={96} />
            <h2>Music</h2>
          </Card>
        </Link>
      )}
    </Grid>,
    <Box
      key="footer"
      as="footer"
      sx={{ bg: 'sunken', textAlign: 'center', py: 3 }}
    >
      <Container
        sx={{
          maxWidth: 640,
          fontFamily: 'accent',
          p: { color: 'secondary' },
          a: { color: 'primary' }
        }}
      >
        <Content />
      </Container>
    </Box>
  ]
}

export default Footer
