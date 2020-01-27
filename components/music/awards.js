import { Grid, Box, Avatar, Text } from 'theme-ui'
import Artwork from './artwork'

const Label = props => (
  <Text
    as="span"
    sx={{ color: 'accent', textTransform: 'uppercase' }}
    {...props}
  />
)

const Name = ({ fontSize = [2, 3, 4, 5], ...props }) => (
  <Text
    as="strong"
    sx={{
      fontSize,
      display: 'block',
      lineHeight: 'heading',
      my: 1
    }}
    {...props}
  />
)

const Comment = props => (
  <Text
    sx={{
      color: 'secondary',
      fontSize: 1
    }}
    {...props}
  />
)

export const Artist = ({ label, name, artwork, children }) => (
  <Box>
    <Grid
      gap={4}
      sx={{ gridTemplateColumns: '128px 1fr', alignItems: 'center', mb: 3 }}
    >
      <Avatar src={artwork} width={128} alt={name} />
      <Box>
        <Label>{label}</Label>
        <Name>{name}</Name>
      </Box>
    </Grid>
    <Comment>{children}</Comment>
  </Box>
)

export const Album = ({ label, name, artwork, artist, children, ...props }) => (
  <Box>
    <Grid
      gap={4}
      sx={{ gridTemplateColumns: '128px 1fr', alignItems: 'center', mb: 3 }}
    >
      <Artwork
        src={artwork.replace('1024x1024', '256x256')}
        alt={name}
        size={256}
        {...props}
      />
      <Box>
        <Label>{label}</Label>
        <Name>{name}</Name>
        <Text
          as="span"
          variant="caption"
          sx={{ fontSize: [1, 2], color: 'muted' }}
        >
          {artist}
        </Text>
      </Box>
    </Grid>
    <Comment>{children}</Comment>
  </Box>
)

export const CD = ({ label, name, artwork, artist, children, ...props }) => (
  <Box>
    <Artwork
      src={artwork.replace('1024x1024', '256x256')}
      alt={name}
      size={256}
      {...props}
    />
    <Box sx={{ mt: 2 }}>
      <Name fontSize={[2, 3]}>{name}</Name>
      <Text as="span" variant="caption" sx={{ fontSize: 1, color: 'muted' }}>
        {artist}
      </Text>
    </Box>
    <Comment>{children}</Comment>
  </Box>
)
