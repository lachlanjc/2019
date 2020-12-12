const dash = n => `${n * 100}, 100`

const colors = {
  move: '#fa114f',
  exercise: '#92e82a',
  stand: '#1eeaef'
}

const Ring = ({
  move = 0.75,
  exercise = 0.66,
  stand = 0.5,
  size = 72,
  ...props
}) => (
  <svg viewBox="0 0 36 36" width={size} height={size} {...props}>
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
    <style jsx>{`
      g {
        transform-origin: 50%;
      }
      circle {
        fill: none;
        transform: translateX(50%) translateY(50%);
      }
      .background {
        opacity: 0.25;
      }
      .completed {
        stroke-linecap: round;
      }
      .move {
        stroke: ${colors.move};
        transform: scale(1) rotate(-90deg);
      }
      .exercise {
        stroke: ${colors.exercise};
        transform: scale(0.75) rotate(-90deg);
      }
      .stand {
        stroke: ${colors.stand};
        transform: scale(0.5) rotate(-90deg);
      }
    `}</style>
  </svg>
)

export default Ring
