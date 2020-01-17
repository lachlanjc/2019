import { Grid, Box, Image, Avatar, Text } from '@theme-ui/components'

const Label = props => (
  <Text
    as="span"
    sx={{ color: 'accent', textTransform: 'uppercase' }}
    {...props}
  />
)

const Name = props => (
  <Text
    as="strong"
    sx={{ fontSize: [2, 3, 4], display: 'block', lineHeight: 'heading', my: 1 }}
    {...props}
  />
)

export const Artist = ({ label, name, artwork }) => (
  <Grid gap={4} sx={{ gridTemplateColumns: '128px 1fr', alignItems: 'center' }}>
    <Avatar src={artwork} width={128} alt={name} />
    <Box>
      <Label>{label}</Label>
      <Name>{name}</Name>
    </Box>
  </Grid>
)

export const Album = ({ label, name, artwork, artist }) => (
  <Grid gap={4} sx={{ gridTemplateColumns: '128px 1fr', alignItems: 'center' }}>
    <Image
      src={artwork.replace('1024x1024', '256x256')}
      width={256}
      alt={name}
      sx={{ borderRadius: 'default' }}
    />
    <div>
      <Label>{label}</Label>
      <Name>{name}</Name>
      <Text as="span" variant="caption" sx={{ color: 'muted' }}>
        {artist}
      </Text>
    </div>
  </Grid>
)
