import { Box, Container, Grid, Heading } from 'theme-ui'
import Meta from '../components/meta'
import Header from '../components/header'
import Stat from '../components/stat'
import Repos from '../components/activity/repos'
import Movement from '../components/activity/movement'
import Rings from '../components/activity/rings'
import GitHub from 'react-github-calendar'

const ActivityPage = () => (
  <Box as="main" sx={{ color: 'text' }}>
    <Meta
      title="Activity"
      description="Lachlan Campbell’s activity, productivity, health, & travel of 2019."
    />
    <Header bg="primary">Activity</Header>
    <Grid
      variant="layout.copy"
      columns={[2, 4]}
      gap={3}
      sx={{ justifyContent: 'center', mb: [3, 4] }}
    >
      <Stat value={7} label="hackathons" color="red" />
      <Stat value="2.5M" label="steps" color="orange" />
      <Stat value={23} label="cities" color="green" />
      <Stat value={24} label="flights" color="blue" />
    </Grid>
    <Container
      variant="copy"
      sx={{
        mb: [4, 5],
        article: { display: 'block', height: 133 },
        text: { fill: 'currentColor !important', opacity: 0.75 }
      }}
    >
      <Heading as="h2" variant="headline">
        GitHub
      </Heading>
      <GitHub username="lachlanjc" years={[2019]} fullYear={false} />
      <Repos />
    </Container>
    <Heading as="h2" variant="headline">
      Daily steps
    </Heading>
    <Movement />
    <Container
      sx={{ text: { fill: 'currentColor !important', opacity: 0.75 } }}
    >
      <Heading as="h2" variant="headline" sx={{ mt: [4, 5] }}>
        Activity rings
      </Heading>
    </Container>
    <Rings />
  </Box>
)

export default ActivityPage
