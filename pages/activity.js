import { Box, Container, Heading, Text, Flex, Grid } from 'theme-ui'
import Meta from '../components/meta'
import Header from '../components/header'
import Rings from '../components/activity/rings'
import GitHub from 'react-github-calendar'

const ActivityPage = () => (
  <Box as="main" sx={{ color: 'text' }}>
    <Meta
      title="Activity"
      description="Lachlan Campbell’s activity, productivity, health, & travel of 2019."
    />
    <Header bg="primary">Activity</Header>
    <Container
      sx={{ text: { fill: 'currentColor !important', opacity: 0.75 } }}
    >
      <Heading as="h2" variant="headline">
        GitHub
      </Heading>
      <GitHub username="lachlanjc" years={[2019]} fullYear={false} />
      <Heading as="h2" variant="headline" sx={{ mt: [4, 5] }}>
        Activity rings
      </Heading>
    </Container>
    <Rings />
  </Box>
)

export default ActivityPage
