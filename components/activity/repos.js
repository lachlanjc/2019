import { Book } from 'react-feather'
import { Grid, Flex, Text } from 'theme-ui'
import Content from './repos.mdx'
import { MDXProvider } from '@mdx-js/react'

export const Repo = ({ children }) => (
  <Flex
    sx={{
      alignItems: 'center',
      color: 'muted',
      textDecoration: 'none',
      p: 2,
      borderRadius: 'default',
      border: '1px solid',
      borderColor: 'border'
    }}
    as="a"
    href={`https://github.com/${children}`}
    target="_blank"
  >
    <Book size={20} />
    <Text as="span" sx={{ ml: 2, color: 'blue' }}>
      {children}
    </Text>
  </Flex>
)

export const RepoList = props => (
  <Grid columns={[null, 2]} gap={2} pt={3} {...props} />
)

const Repos = () => (
  <MDXProvider
    components={{
      ul: RepoList,
      li: Repo
    }}
  >
    <Content />
  </MDXProvider>
)

export default Repos
