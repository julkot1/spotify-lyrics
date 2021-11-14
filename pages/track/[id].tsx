import Layout from '@components/Layout'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Head from 'next/head'
import Loading from '@components/track/Loading'
import Title from '@components/track/Title'
import Artists from '@components/track/Artists'
import Lyrics from '@components/track/Lyrics'
import Album from '@components/track/Album'
import Navbar from '@components/navbar/Navbar'
import RecommendedTracks from '@components/track/RecommendedTracks'
import fetchData from '@utils/fetch/data'

const track = ({ id, tr }) => {
  const [data, getData] = fetchData(id, useSession())
  useEffect(getData, [id])

  return (
    <>
      <Head>
        <title>Lyricsify</title>
      </Head>
      {data ? (
        <Layout>
          <Navbar />
          <Title info={data.track} />
          <Artists artists={data.artists} />
          <Lyrics lyrics={data.track?.lyrics} />
          <Album album={data.album} />
          <RecommendedTracks
            name={data.track.name}
            artists={data.track.artists}
            recommendations={data.recommendations}
          />
        </Layout>
      ) : (
        <Loading />
      )}
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id
  return { props: { id: id } }
}
export default track
