import { Box, Container, Heading, Text, Flex, Grid } from '@theme-ui/components'
import Meta from '../components/meta'
import Header from '../components/header'
import Rings from '../components/activity/rings'
import GitHub from 'react-github-calendar'
import activity from '../data/rings.json'

export default () => (
  <Box as="main" sx={{ color: 'text' }}>
    <Meta
      title="Activity"
      description="Lachlan Campbell’s activity, productivity, health, & travel of 2019."
    />
    <Header bg="accent">Activity</Header>
    <Container>
      <Heading as="h2" variant="headline">
        GitHub
      </Heading>
      <GitHub username="lachlanjc" years={[2019]} fullYear={false} />
      <Heading as="h2" variant="headline">
        Activity rings
      </Heading>
    </Container>
    <Container variant="wide">
      <Grid
        as="ol"
        gap={3}
        columns={[2, 5, 7]}
        sx={{ listStyle: 'none', p: 0 }}
      >
        {Object.keys(activity).map(date => (
          <Grid as="li" key={date} gap={2} sx={{ placeItems: 'center' }}>
            <Rings {...activity[date]} />
            <span>{[date.split('-')[1], date.split('-')[2]].join('/')}</span>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)
