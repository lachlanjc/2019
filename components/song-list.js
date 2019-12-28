import { Grid, Box, Text, Image } from '@theme-ui/components'

const getMonth = i => {
  let dt = new Date(`2019-${i.toString().length === 1 ? `0` : ''}${i}`)
  dt.setDate(dt.getDate() + 1)
  return dt.toLocaleString('default', { month: 'long' })
}

export default ({ songs = [], monthly = false }) => (
  <Grid
    as="ol"
    gap={0}
    sx={{
      px: 3,
      gridTemplateColumns: 'repeat(auto-fill, minmax(384px, 1fr))',
      lineHeight: 'subheading',
      scrollSnapType: 'y mandatory',
      overflowY: 'auto',
      maxHeight: '85vh'
    }}
  >
    {songs.map((song, i) => (
      <Grid
        as="li"
        gap={3}
        sx={{
          p: [1, 2],
          gridTemplateColumns: '24px 64px 1fr',
          alignItems: 'center',
          borderBottom: '0.5px solid',
          borderBottomColor: 'border',
          overflow: 'hidden',
          scrollSnapAlign: 'start'
        }}
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
)
