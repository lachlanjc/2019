import { Box } from 'theme-ui'

const colors = {
  move: '#fa114f',
  exercise: '#92e82a',
  stand: '#1eeaef'
}
const dash = n => `${n * 100}, 100`

const Ring = ({
  move = 0.75,
  exercise = 0.66,
  stand = 0.5,
  size = 72,
  ...props
}) => (
    <Box
      as="svg"
      viewBox="0 0 36 36"
      width={size}
      height={size}
      sx={{
        g: { transformOrigin: '50%' },
        circle: { fill: 'none', transform: 'translateX(50%) translateY(50%)' },
        '.background': { opacity: 0.25 },
        '.completed': { strokeLinecap: 'round' },
        '.move': { stroke: colors.move, transform: 'scale(1) rotate(-90deg)' },
        '.exercise': {
          stroke: colors.exercise,
          transform: 'scale(0.75) rotate(-90deg)'
        },
        '.stand': { stroke: colors.stand, transform: 'scale(0.5) rotate(-90deg)' }
      }}
      {...props}
    >
      <g className="move">
        <circle strokeWidth={3} r={16} className="background" />
        <circle
          strokeWidth={3}
          r={16}
          className="completed"
          strokeDasharray={dash(move)}
        />
      </g>
      <g className="exercise">
        <circle strokeWidth={4} r={16} className="background" />
        <circle
          strokeWidth={4}
          r={16}
          className="completed"
          strokeDasharray={dash(exercise)}
        />
      </g>
      <g className="stand">
        <circle strokeWidth={6} r={16} className="background" />
        <circle
          strokeWidth={6}
          r={16}
          className="completed"
          strokeDasharray={dash(stand)}
        />
      </g>
    </Box>
  )

export default Ring
