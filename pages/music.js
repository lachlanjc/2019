import { Box, Container, Heading, Grid } from '@theme-ui/components'
import { Artist, Album } from '../components/music'
import SongList from '../components/song-list'
import topSongs from '../data/top-songs.json'

export default () => {
  return (
    <Box as="main" sx={{ color: 'text' }}>
      <Box
        as="header"
        sx={{
          pt: [5, 6],
          pb: [3, 5],
          px: 3,
          bg: '#ff365d',
          color: 'textInverse'
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
          2019 <span>in Music</span>
        </Heading>
      </Box>
      <Container variant="wide" sx={{ pt: [4, 5] }}>
        <Heading as="h2" variant="headline">
          Awards
        </Heading>
        <Grid gap={[3, 4]} columns={[null, 2]} sx={{ mb: [4, 5] }}>
          <Artist
            label="Best New Artist"
            name="Conan Gray"
            artwork="https://images.sk-static.com/images/media/img/col6/20190206-182210-650598.jpg"
          />
          <Album
            label="Album of the Year"
            name="Narrated for You"
            artist="Alec Benjamin"
            artwork="https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/c2/66/5e/c2665ec4-d57c-a539-5133-22ee864ca6cb/source/1024x1024bb.png"
          />
          <Album
            label="EP of the Year"
            name="Crystalline"
            artist="Bülow"
            artwork="https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/e2/1c/ac/e21cacac-ff21-2f31-a92d-9f43dda6cbf6/source/1024x1024bb.png"
          />
          <Album
            label="Single of the Year"
            name="i’m so tired…"
            artist="Lauv & Troye Sivan"
            artwork="https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/05/c7/1b/05c71b41-8627-37a3-6fc4-0f1a2272a18c/source/1024x1024bb.png"
          />
        </Grid>
        <Heading as="h2" variant="headline">
          Songs of the months
        </Heading>
      </Container>
      <SongList songs={topSongs} />
      <Container sx={{ pt: [3, 4, 5], pb: [2, 3] }}>
        <Heading as="h2" variant="headline">
          Top songs
        </Heading>
      </Container>
      <SongList songs={topSongs} />
    </Box>
  )
}
