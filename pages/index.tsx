import Main from '@components/main/Main'
import Layout from '@components/Layout'
import Head from 'next/head'
import React from 'react'
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
