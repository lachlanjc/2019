import { Box } from '@theme-ui/components'

export const Banner = props => (
  <Box
    {...props}
    sx={{
      pt: [5, 6, 7],
      pb: [4, 5, 6],
      backgroundImage: 'url(/cover.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      h1: {
        fontSize: [6, 7, 8],
        fontWeight: 'heading',
        lineHeight: 'title',
        mt: [0, -2, -3],
        mb: 3,
        span: {
          WebkitTextStroke: 'white',
          WebkitTextStrokeWidth: '3px',
          WebkitTextFillColor: 'transparent'
        }
      },
      p: {
        fontSize: [2, 3],
        fontWeight: 'normal',
        mt: [3, 0, -4],
        mb: [2, 4],
        transform: 'rotate(-6deg)'
      },
      a: {
        color: 'inherit',
        fontWeight: 'bold'
      }
    }}
  />
)

export const Tiles = props => (
  <Box
    {...props}
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: [3, 4],
        gridTemplateColumns: [null, 'repeat(auto-fit, minmax(384px, 1fr))']
      },
      li: {
        bg: 'elevated',
        color: 'elevatedText',
        p: [3, 4],
        borderRadius: 'extra',
        boxShadow: 'card',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform .125s ease-in-out',
        ':hover': {
          transform: 'scale(1.025) translateY(-4px)'
        },
        '> a:first-of-type': {
          display: 'block',
          m: [-3, -4],
          mb: [2, 3, 4]
        }
      },
      h2: {
        fontSize: [2, 3],
        mb: 1,
        lineHeight: 'heading',
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      },
      p: {
        my: 0
      },
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        height: 256,
        objectFit: 'cover',
        objectPosition: 'center'
      },
      ...props.sx
    }}
  />
)

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: [null, 'repeat(auto-fit, minmax(256px, 1fr))'],
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 0
      },
      ...props.sx
    }}
  />
)
