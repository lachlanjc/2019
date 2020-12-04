import { Grid, Heading, Flex } from 'theme-ui'
import Ring from './ring'
import { padMonth, getMonth } from '../util'
import { times, keys, filter, startsWith } from 'lodash'
import activity from '../../data/rings.json'

const Rings = () => (
  <Grid
    columns={[null, null, 2, 3]}
    variant="wide"
    as="ol"
    sx={{
      gridRowGap: [4, null, null, null, 5],
      gridColumnGap: [3, 4],
      listStyle: 'none',
      px: [2, 3, 4]
    }}
  >
    {times(12, month => (
      <li key={month}>
        <Heading as="h3" variant="subheadline">
          {getMonth(month)}
        </Heading>
        <Grid
          as="ol"
          columns={[7, null, null, null, 11]}
          sx={{ listStyle: 'none', p: 0, counterReset: 'li', mt: 3 }}
        >
          {filter(keys(activity), k => startsWith(k, padMonth(month))).map(
            date => (
              <Flex
                as="li"
                key={date}
                sx={{
                  position: 'relative',
                  justifyContent: 'center',
                  ':before': {
                    content: 'counter(li)',
                    counterIncrement: 'li',
                    fontSize: 0,
                    color: 'muted',
                    position: 'absolute',
                    top: -2,
                    right: -2,
                    width: 12,
                    textAlign: 'right'
                  }
                }}
              >
                <Ring size={48} {...activity[date]} />
              </Flex>
            )
          )}
        </Grid>
      </li>
    ))}
  </Grid>
)

export default Rings
