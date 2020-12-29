import React, { useRef } from 'react'
import useComponentSize from '@rehooks/component-size'
import { Box, Card, Text, useThemeUI } from 'theme-ui'

import raw from '../../data/movement.json'
import { parseInt } from 'lodash'
import commaNumber from 'comma-number'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const movement = raw.map(({ date, steps }) => ({
  date,
  steps: parseInt(steps)
}))

const renderTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload
    return (
      <Card sx={{ p: [2, 2] }}>
        <strong>{new Date(data.date).toLocaleDateString('en-us')}</strong>
        <Text as="p" variant="caption" my={0}>{commaNumber(data.steps)} steps</Text>
      </Card>
    )
  }
  return null
}

const Movement = () => {
  const ref = useRef(null)
  const { width } = useComponentSize(ref)
  const { theme } = useThemeUI()
  return (
    <Box
      ref={ref}
      sx={{
        mb: 4,
        '.recharts-cartesian-axis-tick-value': {
          fontSize: 0,
          letterSpacing: '-0.04em'
        }
      }}
    >
      <BarChart
        width={width}
        height={200}
        data={movement}
        barCategoryGap={0}
        margin={{ right: 32 }}
      >
        <XAxis
          dataKey="date"
          tickFormatter={n =>
            new Date(n).toLocaleDateString('en-us').replace('/2019', '')
          }
        />
        <YAxis
          ticks={[0, 5000, 10000, 15000, 20000]}
          tickFormatter={n =>
            n === 0 ? 0 : String(n).substring(0, String(n).length - 3) + 'k'
          }
        />
        <Tooltip content={renderTooltip} />
        <Bar dataKey="steps" fill={theme.colors.primary} />
      </BarChart>
    </Box>
  )
}

export default Movement
