import { BaseStyles, Box, Container } from 'theme-ui'
import BGImg from './bg-img'
import theme, { colors } from './theme'

export const Banner = ({ children }) => (
  <Box
    as="header"
    sx={{
      pt: [5, 6, 7],
      pb: [4, 5, 6],
      position: 'relative',
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
  >
    <BGImg
      src="/cover.jpg"
      alt="Hudson river/Jersey City at sunset, seen from Battery Park, Manhattan"
      width={2224}
      height={1251}
      priority
    />
    {children}
  </Box>
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
        WebkitTextStroke: colors.yellow,
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
        '@media (prefers-reduced-motion: no-preference) and (hover: hover)': {
          transition: 'transform 1.5s ease-in-out',
          ':hover': {
            transform: 'scaleY(8) scaleX(-8)'
          }
        },
        ':nth-of-type(1)': {
          backgroundImage: `linear-gradient(${colors.cyan} 33%, ${colors.blue} 100%)`
        },
        ':nth-of-type(2)': {
          backgroundImage: `linear-gradient(${colors.yellow} 33%, ${colors.green} 100%)`
        },
        ':nth-of-type(3)': {
          backgroundImage: `linear-gradient(${colors.yellow} 33%, ${colors.orange} 100%)`
        },
        ':nth-of-type(4)': {
          backgroundImage: `linear-gradient(${colors.orange} 33%, ${colors.red} 100%)`
        },
        ':nth-of-type(5)': {
          backgroundImage: `linear-gradient(${colors.smoke} 33%, ${colors.muted} 100%)`
        }
      }
    }}
    {...props}
  />
)

export default Story
