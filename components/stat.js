import { Box, Badge, Text } from 'theme-ui'

const Arc = ({ value = 2 / 3, strokeWidth = 2, size = 128, ...props }) => {
  const R = 16 - strokeWidth
  const C = 2 * Math.PI * R
  return (
    <svg {...props} viewBox="0 0 32 32" width={size} height={size}>
      <circle
        cx={16}
        cy={16}
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={C}
        strokeDashoffset={C - value * C}
        strokeLinecap="round"
        transform="rotate(-90 16 16)"
      />
    </svg>
  )
}

const Stat = ({ value, label, color = 'currentColor' }) => (
  <Box
    sx={{
      color,
      display: 'inline-flex',
      flexDirection: 'column',
      textAlign: 'center',
      position: 'relative',
      py: 3,
      px: 2,
      height: 128 * 1.25,
      width: 128 * 1.25,
      lineHeight: 1,
      svg: {
        transform: 'translateX(12.5%) translateY(-6.25%) rotate(-120deg)',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.75
      }
    }}
  >
    <Arc />
    <Text as="span" sx={{
      fontWeight: 'bold',
      lineHeight: 'title',
      letterSpacing: 'title',
      fontSize: value.toString().length > 2 ? 4 : 6,
      lineHeight: '64px'
    }}>{value}</Text>
    <Badge
      as="span"
      variant="pill"
      sx={{
        mt: 3,
        border: '3px solid',
        borderColor: 'background',
        fontFamily: 'accent',
        bg: color
      }}
    >
      {label}
    </Badge>
  </Box>
)

export default Stat
