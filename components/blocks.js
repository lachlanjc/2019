import styled from '@emotion/styled'
import { Box, Text, useColorMode } from 'theme-ui'
import Image from 'next/image'
import YouTubePlayer from 'react-player/youtube'
import theme from './theme'

export const YouTube = (props) => (
  <Box
    sx={{
      boxShadow: 'elevated',
      borderRadius: 'extra',
      position: 'relative',
      maxWidth: 'copyPlus',
      mx: 'auto',
      lineHeight: 0,
      overflow: 'hidden',
      ...props.sx,
    }}>
    <YouTubePlayer
      width="100%"
      height={430}
      controls
      config={{ youtube: { playerVars: { showinfo: 1 } } }}
      {...props}
    />
  </Box>
)

const Caption = styled(Text)`
  display: block;
  font-size: ${theme.fontSizes[1]}px;
  line-height: ${theme.lineHeights.body};
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 ${theme.radii.extra}px ${theme.radii.extra}px;
  width: 100%;
  max-width: 100%;
  z-index: 0;
`

export const Photo = ({ src, width, height, alt, showAlt = true, dark, ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Box
      {...props}
      as="figure"
      sx={{
        boxShadow: 'elevated',
        borderRadius: 'extra',
        position: 'relative',
        maxWidth: '100%',
        lineHeight: 0,
        overflow: 'hidden',
        height: 'fit-content',
        ...props.sx,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
      />
      {(showAlt && alt) && (
        <Caption
          as="figcaption"
          variant={colorMode === 'dark' ? 'cards.translucentDark' : 'cards.translucent'}
          children={alt}
        />
      )}
    </Box>
  )
}

export const Pano = props => (
  <Box as="section">
    <Image {...props} />
  </Box>
)
