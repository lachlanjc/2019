import React, { useRef } from 'react'
import useComponentSize from '@rehooks/component-size'
import { Box, Card, useThemeUI } from 'theme-ui'

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
      <Card sx={{ p: 1 }}>
        <p>{new Date(data.date).toLocaleDateString('en-us')}</p>
        <p>{commaNumber(data.steps)} steps</p>
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

/*
const data02 = [
  { date: '12a', index: 1, value: 160 },
  { date: '1a', index: 1, value: 180 },
  { date: '2a', index: 1, value: 150 },
  { date: '3a', index: 1, value: 120 },
  { date: '4a', index: 1, value: 200 },
  { date: '5a', index: 1, value: 300 },
  { date: '6a', index: 1, value: 100 },
  { date: '7a', index: 1, value: 200 },
  { date: '8a', index: 1, value: 100 },
  { date: '9a', index: 1, value: 150 },
  { date: '10a', index: 1, value: 160 },
  { date: '11a', index: 1, value: 160 },
  { date: '12a', index: 1, value: 180 },
  { date: '1p', index: 1, value: 144 },
  { date: '2p', index: 1, value: 166 },
  { date: '3p', index: 1, value: 145 },
  { date: '4p', index: 1, value: 150 },
  { date: '5p', index: 1, value: 160 },
  { date: '6p', index: 1, value: 180 },
  { date: '7p', index: 1, value: 165 },
  { date: '8p', index: 1, value: 130 },
  { date: '9p', index: 1, value: 140 },
  { date: '10p', index: 1, value: 160 },
  { date: '11p', index: 1, value: 180 }
]

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data.map(entry => entry.steps)
    ),
    Math.max.apply(
      null,
      data.map(entry => entry.steps)
    )
  )
]

export default () => {
  const domain = [0, 12000] // parseDomain()
  const range = [0, 12000]
  // console.log(domain, range)

  return (
    <div>
      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="date"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Steps', position: 'insideRight' }}
        />
        <ZAxis type="number" dataKey="steps" domain={domain} range={range} />
        <Scatter data={data} fill="#8884d8" />
      </ScatterChart>

      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0
        }}
      >
        <XAxis
          type="category"
          dataKey="date"
          name="date"
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type="number"
          dataKey="index"
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Monday', position: 'insideRight' }}
        />
        <ZAxis type="number" dataKey="value" domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data02} fill="#8884d8" />
      </ScatterChart>
    </div>
  )
}
*/
