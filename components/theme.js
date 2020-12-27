export const colors = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',

  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda'
}

const theme = {
  breakpoints: [32, 48, 64, 96, 128].map(w => `${w}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 16, 20, 24, 32, 48, 64, 96, 128],
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...colors,
    text: colors.black,
    background: colors.white,
    elevated: colors.white,
    sunken: colors.smoke,
    border: colors.smoke,
    placeholder: colors.muted,
    secondary: colors.slate,
    primary: colors.cyan,
    muted: colors.muted,
    accent: colors.yellow,
    music: '#ff365d',
    modes: {
      dark: {
        text: colors.white,
        background: colors.dark,
        elevated: colors.darkless,
        sunken: colors.darker,
        border: colors.darkless,
        placeholder: colors.slate,
        secondary: colors.muted
      }
    }
  },
  fonts: {
    heading:
      '"Roobert", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body:
      '"Roobert", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    accent:
      '"iA Quattro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"SFMono-Regular", "Roboto Mono", Menlo, Consolas, monospace'
  },
  lineHeights: {
    limit: 0.875,
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    caption: 1.375,
    body: 1.5
  },
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700
  },
  letterSpacings: {
    title: '-0.009em',
    headline: '0.009em'
  },
  sizes: {
    widePlus: 2048,
    wide: 1536,
    layoutPlus: 1200,
    layout: 1024,
    copyPlus: 768,
    copy: 680,
    narrowPlus: 600,
    narrow: 512
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)'
  },
  text: {
    heading: {
      fontWeight: 'bold',
      lineHeight: 'heading'
    },
    title: {
      fontWeight: 'bold',
      lineHeight: 'title',
      letterSpacing: 'title',
      fontSize: [4, 5, 6]
    },
    subtitle: {
      fontSize: [2, 3, null, null, 4],
      fontWeight: 'body',
      letterSpacing: 'headline',
      lineHeight: 'subheading'
    },
    headline: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'headline',
      fontSize: 4,
      textAlign: 'center',
      textTransform: 'uppercase',
      mt: 0,
      mb: [3, 4]
    },
    subheadline: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'headline',
      fontSize: [2, 3],
      mt: 0,
      mb: 2
    },
    caption: {
      color: 'muted',
      fontFamily: 'accent',
      fontWeight: 'body',
      letterSpacing: 'headline'
    },
    accent: {
      fontFamily: 'accent'
    }
  },
  badges: {
    pill: {
      borderRadius: 'circle',
      px: 2,
      py: 1,
      fontSize: 1
    }
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      svg: { ml: -1, mr: 2 }
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'primary',
      border: '2px solid currentColor'
    }
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      position: 'relative'
    },
    interactive: {
      variant: 'cards.primary',
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated'
      }
    },
  },
  layout: {
    container: {
      maxWidth: ['copyPlus', null, 'layout', null, 'layoutPlus'],
      width: '100%',
      mx: 'auto',
      px: 3
    },
    wide: {
      variant: 'layout.container',
      px: [3, null, 4],
      maxWidth: ['wide', null, null, null, 'widePlus']
    },
    copy: {
      variant: 'layout.container',
      maxWidth: ['copy', null, null, null, 'copyPlus']
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: ['narrow', null, 'narrowPlus', null, 'layout']
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      margin: 0,
      minHeight: '100vh'
    },
    h2: {
      variant: 'text.heading',
      my: 0,
      fontSize: [4, 5]
    },
    p: {
      color: 'text',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary',
      textUnderlinePosition: 'under',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    img: {
      maxWidth: '100%'
    },
    hr: {
      border: 0,
      py: 1,
      backgroundImage: `linear-gradient(${colors.yellow} 33%, ${colors.orange} 100%)`,
      borderRadius: 999,
      maxWidth: 256,
      mx: 'auto',
      my: 5
    }
  }
}

theme.util = {
  motion: '@media (prefers-reduced-motion: no-preference)',
  reduceMotion: '@media (prefers-reduced-motion: reduce)',
  supportsClipText: '@supports (-webkit-background-clip: text)',
  supportsBackdrop:
    '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)'
}

theme.cards.translucent = {
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  color: 'text',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)'
  }
}
theme.cards.translucentDark = {
  backgroundColor: 'rgba(0, 0, 0, 0.875)',
  color: 'white',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(0, 0, 0, 0.625)',
    backdropFilter: 'saturate(180%) blur(16px)',
    WebkitBackdropFilter: 'saturate(180%) blur(16px)'
  }
}

export default theme
