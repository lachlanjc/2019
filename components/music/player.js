import useComponentSize from '@rehooks/component-size'
import { useState, useRef } from 'react'
import { Box, Flex, IconButton, useColorMode } from 'theme-ui'
import { VideoOff, Maximize, X } from 'react-feather'
import Embed from 'react-song-embed'

const TOOLBAR_HEIGHT = 40

const Player = ({ url, onClose }) => {
  const ref = useRef(null)
  const { width, height } = useComponentSize(ref)
  const [colorMode] = useColorMode()
  const [mini, setMini] = useState(false)
  return (
    <Box
      ref={ref}
      as="aside"
      sx={{
        bg: 'elevated',
        borderRadius: 'extra',
        boxShadow: 'elevated',
        width: '100%',
        maxWidth: ['calc(100vw - 32px)', 384, null, 512],
        height: mini
          ? 128 + TOOLBAR_HEIGHT
          : [256 + TOOLBAR_HEIGHT, null, null, 384 + TOOLBAR_HEIGHT],
        position: 'fixed',
        left: 3,
        right: 3,
        bottom: 3,
        zIndex: 3,
        overflow: 'hidden',
        transition: 'transform 0.375s ease-in-out',
        transform: (url !== null && url !== '') ? 'translateY(0)' : 'translateY(200%)'
      }}
    >
      <Flex
        as="header"
        sx={{
          p: 1,
          height: TOOLBAR_HEIGHT,
          bg: 'music',
          color: 'white',
          justifyContent: 'flex-end',
          button: {
            ml: 2,
            transition: '0.125s ease-in-out all',
            ':hover,:focus': { opacity: 0.8 },
            ':active': { transform: 'scale(0.875)' }
          }
        }}
      >
        <IconButton onClick={e => setMini(m => !m)} mr={2}>
          {mini ? <Maximize /> : <VideoOff />}
        </IconButton>
        <IconButton onClick={onClose}>
          <X />
        </IconButton>
      </Flex>
      {url && (
        <Embed
          url={url}
          dark={colorMode === 'dark'}
          width={width}
          height={mini ? 128 : height - TOOLBAR_HEIGHT}
          key="player"
        />
      )}
    </Box>
  )
}

export default Player
