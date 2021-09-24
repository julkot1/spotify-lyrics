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
import fetchTrack from '@utils/fetch/track'
import fetchArtists from '@utils/fetch/artists'

const track = ({ id, tr }) => {
  const [track, getTrack] = fetchTrack(tr, id, useSession())
  useEffect(getTrack, [id])
  const [artists, getArtists] = fetchArtists(track.artists_url, useSession())
  useEffect(getArtists, [id])
  return (
    <>
      <Head>
        <title>Lyricsify</title>
      </Head>
      {track ? (
        <Layout>
          <Navbar />
          <Title info={track} />
          <Artists artists={artists} />
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
