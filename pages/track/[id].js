import Layout from '@components/Layout'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import axios from 'axios'
import Head from 'next/head'
import Loading from '@components/track/Loading'
import Title from '@components/track/Title'
import Artists from '@components/track/Artists'
import Lyrics from '@components/track/Lyrics'
import Album from '@components/track/Album'
import Navbar from '@components/navbar/Navbar'
import RecommendedTracks from '@components/track/RecommendedTracks'

const track = ({ id, tr }) => {
  const session = useSession()
  const [track, setTrack] = useState(tr)
  const getTrack = async () => {
    if (session) {
      setTrack(null)
      const result = await axios.get(
        `https://julkot1-spotify-lyrics.vercel.app/api/track`,
        {
          params: { id: id },
        }
      )
      setTrack(result.data)
    }
  }

  useEffect(getTrack, [id])
  return (
    <>
      <Head>
        <title>Lyricsify</title>
      </Head>
      {track ? (
        <Layout>
          <Navbar />
          <Title
            info={track.info}
            title={track.info.name}
            artists={track.artist}
            img={track.album.images[0]}
          />
          <Artists artists={track.artist} />
          <Lyrics lyrics={track?.lyrics} />
          <Album album={track.album} />
          <RecommendedTracks id={track.info.id} />
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
