import { useState } from 'react'
import { useColorMode } from 'theme-ui'
import { Container, Grid, Box, Text, Image } from '@theme-ui/components'
import Embed from 'react-song-embed'

const getMonth = i => {
  let dt = new Date(`2019-${i.toString().length === 1 ? `0` : ''}${i}`)
  dt.setDate(dt.getDate() + 1)
  return dt.toLocaleString('default', { month: 'long' })
}

export default ({ songs = [], monthly = false }) => {
  const [url, setUrl] = useState(null)
  const [colorMode] = useColorMode()

  return [
    url && (
      <Container sx={{ mb: 3 }}>
        <Embed
          url={url}
          dark={colorMode === 'dark'}
          height={256}
          key="player"
        />
      </Container>
    ),
    <Grid
      key="list"
      as="ol"
      gap={0}
      sx={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(384px, 1fr))',
        lineHeight: 'subheading',
        px: 3
      }}
    >
      {songs.map((song, i) => (
        <Grid
          as="li"
          gap={3}
          sx={{
            p: [1, 2],
            overflow: 'hidden',
            alignItems: 'center',
            gridTemplateColumns: '24px 64px 1fr',
            borderBottom: '0.5px solid',
            borderBottomColor: 'border'
          }}
          onClick={() => setUrl(song.link)}
          key={song.title}
        >
          <Text
            as="span"
            sx={{ textTransform: 'uppercase', fontSize: monthly ? 0 : 1 }}
          >
            {monthly ? getMonth(i + 1).slice(0, 3) : `${i + 1}.`}
          </Text>
          {song.artwork ? (
            <Image
              src={song.artwork.replace('512x512', '128x128')}
              loading="lazy"
              width={64}
              alt={`${song.album} artwork`}
              sx={{ borderRadius: 'small' }}
            />
          ) : (
            <Box
              sx={{
                bg: 'border',
                borderRadius: 'small',
                width: 64,
                height: 64
              }}
            />
          )}
          <div>
            <Text as="strong" sx={{ display: 'block' }}>
              {song.title}
            </Text>
            <Text as="small" variant="caption">
              {song.artist} –{' '}
              {song.album.includes(' - Single') ? 'Single' : song.album}
            </Text>
          </div>
        </Grid>
      ))}
    </Grid>
  ]
}
