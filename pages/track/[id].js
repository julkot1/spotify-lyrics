import Layout from '@components/Layout'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import axios from 'axios'
import styled from 'styled-components'
const Text = styled.text`
  text-align: left;
  font-size: 20px;
`
const track = ({ id }) => {
  const session = useSession()
  const [track, setTrack] = useState(null)
  const getTrack = async () => {
    if (session) {
      const result = await axios.get(`${process.env.API_URL}track`, {
        params: { id: id },
      })
      console.log(result.data)
      setTrack(result.data)
    }
  }
  useEffect(getTrack, [])
  return (
    <>
      {track && (
        <Layout>
          <p>{track.track.name}</p>
          <p>{track.album.name}</p>
          <p>
            {track.artist.map((m) => m.name).reduce((p, a) => `${p}, ${a}`)}
          </p>
          <Text>
            {track.lyrics &&
              track.lyrics.split('\n').map((str) => <p>{str}</p>)}
          </Text>
        </Layout>
      )}
    </>
  )
}
export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id
  return { props: { id: id } }
}
export default track
