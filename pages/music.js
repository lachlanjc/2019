import { useState } from 'react'
import { Box, Container, Heading, Grid } from '@theme-ui/components'
import { Artist, Album } from '../components/music/awards'
import Meta from '../components/meta'
import Header from '../components/header'
import SongList from '../components/music/song-list'
import Player from '../components/music/player'

import topSongs from '../data/top-songs.json'
import monthlySongs from '../data/monthly-songs.json'
import springSongs from '../data/spring-songs.json'
import summerSongs from '../data/summer-songs.json'
import fallSongs from '../data/fall-songs.json'
import { capitalize } from 'lodash'

const seasons = { spring: springSongs, summer: summerSongs, fall: fallSongs }

export default () => {
  const [url, setUrl] = useState(null)

  return (
    <Box as="main" sx={{ color: 'text' }}>
      <Meta title="Music" description="Lachlan Campbell’s top music of 2019." />
      <Header bg="#ff365d">Music</Header>
      <Container variant="wide">
        <Heading as="h2" variant="headline">
          Awards
        </Heading>
        <Grid gap={[3, 4]} columns={[null, 2]} sx={{ mb: [4, 5] }}>
          <Artist
            label="Best New Artist"
            name="Conan Gray"
            artwork="https://images.sk-static.com/images/media/img/col6/20190206-182210-650598.jpg"
          >
            Conan is hands-down my favorite artist right now—stand-out
            songwriting, creative direction, style—& I can’t wait for his album.
            Seeing him live twice this year (in SF & NYC) was a joy.
          </Artist>
          <Album
            label="Album of the Year"
            name="Narrated for You"
            artist="Alec Benjamin"
            artwork="https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/c2/66/5e/c2665ec4-d57c-a539-5133-22ee864ca6cb/source/1024x1024bb.png"
          >
            Write things
          </Album>
          <Album
            label="EP of the Year"
            name="Crystalline"
            artist="Bülow"
            artwork="https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/e2/1c/ac/e21cacac-ff21-2f31-a92d-9f43dda6cbf6/source/1024x1024bb.png"
          >
            I’m super excited to see what Bülow does next.
          </Album>
          <Album
            label="Single of the Year"
            name="i’m so tired…"
            artist="Lauv & Troye Sivan"
            artwork="https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/05/c7/1b/05c71b41-8627-37a3-6fc4-0f1a2272a18c/source/1024x1024bb.png"
          >
            This song isn’t super deep or groundbreaking, but it’s perfect pop.
          </Album>
        </Grid>
        <Heading as="h2" variant="headline">
          Songs of the months
        </Heading>
      </Container>
      <SongList songs={monthlySongs} monthly onPlay={setUrl} />
      <Heading as="h2" variant="headline" sx={{ mt: [4, 5], mb: [3, 4] }}>
        Seasonal playlists
      </Heading>
      <Grid columns={[null, null, 3]} sx={{ p: 3 }}>
        {Object.keys(seasons).map(season => (
          <div key={season} id={season}>
            <Heading as="h3" variant="subheadline" sx={{ pl: [36, 48] }}>
              {capitalize(season)}
            </Heading>
            <SongList songs={seasons[season]} onPlay={setUrl} sx={{}} />
          </div>
        ))}
      </Grid>
      <Container sx={{ pt: [3, 4, 5], pb: [2, 3] }}>
        <Heading as="h2" variant="headline">
          Top 100 songs
        </Heading>
      </Container>
      <SongList songs={topSongs} onPlay={setUrl} />
      <Player url={url} onClose={e => setUrl(null)} />
    </Box>
  )
}
