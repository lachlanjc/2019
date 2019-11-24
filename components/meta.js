import Head from 'next/head'

export default ({
  title = 'One Day This Kid Will Talk',
  description = 'January 2019, 111 hackers came together for Pennsylvania’s largest high school hackathon ever.',
  image = 'https://2019.hackpenn.com/card.png',
  url = 'https://hackpenn.com'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Hack Pennsylvania" />
    <meta name="twitter:site" content="@hackpenn" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="theme-color" content="#2b34b6" />
  </Head>
)

