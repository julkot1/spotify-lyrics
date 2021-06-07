import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TrackItem from './TrackItem'

const StyledList = styled.ul`
  list-style: none;
  margin: 1em;
`
const TracksList = () => {
  const router = useRouter()
  const [tracks, setTracks] = useState([])
  const getTracks = async () => {
    const result = await axios.get(`${process.env.API_URL}search`, {
      params: { q: router.query.q },
    })
    setTracks(result.data)
  }
  useEffect(getTracks, [router.asPath])
  return (
    <StyledList>
      {tracks.map((track) => (
        <TrackItem track={track} />
      ))}
    </StyledList>
  )
}

export default TracksList
