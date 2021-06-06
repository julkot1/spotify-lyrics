import Main from '@components/Main'
import Layout from '@components/Layout'
import Head from 'next/head'
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Lyricsify</title>
      </Head>
      <Main />
    </Layout>
  )
}
