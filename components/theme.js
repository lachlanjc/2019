import base from '@hackclub/theme'
import { merge } from 'lodash'

export const palette = {
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
  blue: '#338eda',

  primary: '#007a87',
  primaryWash: '#bfe6ea',
  primaryWashLight: '#dffbfd',
  primaryLight: '#009aab',
  primaryDark: '#004f58',
  alt: '#ff5a5f',
  altLight: '#ff7e82',
  altDark: '#e00007',
  success: '#3fb34f',
  error: '#b23f42',
  warm: '#ffb400',
  warmWash: '#ffdc89',
  cool: '#00bdde',
  coolWash: '#7cecff'
}

const theme = {
  ...base,
  colors: {
    ...palette,
    text: palette.black,
    background: palette.white,
    elevated: palette.white,
    sunken: palette.smoke,
    border: palette.smoke,
    placeholder: palette.muted,
    muted: palette.muted,
    secondary: palette.slate,
    primary: palette.primary,
    accent: palette.alt,
    textInverse: palette.white,
    header: palette.snow,
    nav: palette.white,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        elevated: palette.darkless,
        sunken: palette.darker,
        border: palette.darkless,
        placeholder: palette.slate,
        secondary: palette.muted,
        // muted: palette.muted,
        primary: palette.primaryLight,
        // accent: palette.altDark,
        textInverse: palette.dark,
        header: palette.darkless,
        nav: palette.primary
      }
    }
  },
  fonts: {
    heading:
      'Roobert, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body:
      'Roobert, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    accent:
      '"iA Quattro", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SFMono-Regular", "Roboto Mono", Menlo, Consolas, monospace'
  },
  fontWeights: {
    body: 400,
    bold: 700
  },
  radii: {
    small: 3,
    default: 6,
    extra: 9,
    circle: 99999
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
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      cursor: 'pointer',
      fontFamily: 'body',
      fontWeight: 'bold',
      svg: { ml: -1, mr: 2 }
    },
    inverted: {
      bg: 'invertedPrimary',
      color: 'invertedText',
      cursor: 'pointer',
      fontFamily: 'body',
      fontWeight: 'bold',
      svg: { ml: -1, mr: 2 }
    }
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      input: { boxShadow: 'none !important' }
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra',
      'input, a': { bg: 'header', boxShadow: 'none !important' }
    },
    nav: {
      bg: 'elevated',
      color: 'text',
      px: 3,
      py: 4,
      borderRadius: 'extra',
      boxShadow: 'card',
      textDecoration: 'none',
      position: 'relative',
      overflow: 'hidden',
      fontSize: 2,
      fontWeight: 'bold',
      lineHeight: 'title',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated'
      }
    }
  },
  styles: merge(base.styles, {
    hr: {
      my: [4, 5]
    }
  })
}
theme.styles.root = {
  fontFamily: theme.fonts.body,
  lineHeight: theme.lineHeights.body,
  fontWeight: theme.fontWeights.body,
  color: 'text',
  margin: 0,
  minHeight: '100vh'
}

export default theme
