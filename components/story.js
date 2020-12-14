import { BaseStyles, Box, Container } from 'theme-ui'
import theme from './theme'

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

const Story = props => (
  <Container
    as={BaseStyles}
    sx={{
      color: 'text',
      fontSize: 2,
      py: [3, 4],
      'p, h2': {
        maxWidth: 'copyPlus',
        mx: 'auto'
      },
      'p:first-of-type::first-letter': {
        initialLetter: '3',
        WebkitInitialLetter: '3',
        color: 'accent',
        fontWeight: 'bold',
        WebkitTextStroke: theme.colors.yellow,
        WebkitTextStrokeWidth: '3px',
        WebkitTextFillColor: 'transparent',
        pr: 2,
        pb: 1
      },
      '> figure': {
        my: 4
      },
      '> section': {
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        mx: '-50vw',
        my: [4, 5]
      },
      hr: {
        [theme.util.motion]: {
          transition: 'transform 1.5s ease-in-out',
          ':hover': {
            transform: 'scaleY(8) scaleX(-8)'
          }
        },
        ':nth-of-type(1)': {
          backgroundImage: `linear-gradient(${theme.colors.cyan} 33%, ${theme.colors.blue
            } 100%)`
        },
        ':nth-of-type(2)': {
          backgroundImage: `linear-gradient(${theme.colors.yellow} 33%, ${theme.colors.green
            } 100%)`
        },
        ':nth-of-type(3)': {
          backgroundImage: `linear-gradient(${theme.colors.yellow} 33%, ${theme.colors.orange
            } 100%)`
        },
        ':nth-of-type(4)': {
          backgroundImage: `linear-gradient(${theme.colors.orange} 33%, ${theme.colors.red
            } 100%)`
        },
        ':nth-of-type(5)': {
          backgroundImage: `linear-gradient(${theme.colors.smoke} 33%, ${theme.colors.muted
            } 100%)`
        }
      }
    }}
    {...props}
  />
)

export default Story
