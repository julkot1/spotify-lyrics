import { Track } from '@utils/types/track'
import React, { FunctionComponent, useState } from 'react'
import { useEffect } from 'react'
import axios from 'node_modules/axios/index'
import styled from 'styled-components'
import TopTrackItem from './TopTrackItem'

type Props = {
  term: string
}
const StyledList = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  min-height: 800px;
`

const TopTracksList: FunctionComponent<Props> = ({ term }) => {
  const [tracks, setTracks] = useState<Track[]>([])
  useEffect(() => {
    ;(async () => {
      setTracks([])
      setTracks(
        (
          await axios.get(
            `${process.env.API_URL}profile/toptracks?term=${term}`
          )
        ).data
      )
    })()
  }, [term])
  return (
    <StyledList>
      {tracks &&
        tracks.map((e, index) => <TopTrackItem track={e} index={index + 1} />)}
    </StyledList>
  )
}
export default TopTracksList
