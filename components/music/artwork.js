import { Box, Image, IconButton } from '@theme-ui/components'
import { PlayCircle } from 'react-feather'

const PlayButton = props => (
  <IconButton
    sx={{
      color: 'white',
      position: 'absolute',
      top: '25%',
      left: '25%',
      transform: 'translate(-50%)',
      transform: 'scale(0)',
      transition: 'transform 0.125s ease-in-out'
    }}
    {...props}
  >
    <PlayCircle size={24} />
  </IconButton>
)

const Artwork = ({ src, alt, size = 64 }) => (
  <Box sx={{ cursor: 'pointer', position: 'relative', lineHeight: 0 }}>
    <Image
      src={src}
      loading="lazy"
      width={size}
      alt={`${alt} artwork`}
      sx={{ borderRadius: size < 100 ? 'small' : 'default' }}
    />
    <PlayButton />
  </Box>
)

export default Artwork
