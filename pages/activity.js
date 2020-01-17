import { Box, Container, Heading } from '@theme-ui/components'
import Meta from '../components/meta'
import Header from '../components/header'
import GitHub from 'react-github-calendar'

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
    </Container>
  </Box>
)
