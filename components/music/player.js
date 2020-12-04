import { useState } from 'react'
import { Box, useColorMode } from 'theme-ui'
import Embed from 'react-song-embed'

const Player = ({ url, onClose }) => {
  const [colorMode] = useColorMode()
  return (
    <Box
      as="aside"
      sx={{
        bg: 'elevated',
        borderRadius: 'extra',
        boxShadow: 'elevated',
        width: '100%',
        maxWidth: ['calc(100vw - 32px)', 384, null, 512],
        height: [256, null, null, 384],
        position: 'fixed',
        left: 3,
        right: 3,
        bottom: 3,
        zIndex: 3,
        overflow: 'hidden',
        transition: 'transform 0.25s ease-in-out'
      }}
      style={{
        transform: url ? 'translateY(0)' : 'translateY(200%)'
      }}
    >
      {url && (
        <Embed
          url={url}
          dark={colorMode === 'dark'}
          height="100%"
          key="player"
        />
      )}
    </Box>
  )
}

export default Player
