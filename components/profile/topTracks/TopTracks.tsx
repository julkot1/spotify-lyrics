import Container from '@components/Container'
import React, { FunctionComponent, useState } from 'react'
import ProfileTitle from '../ProfileTitle'
import TopSelect from '../TopSelect'
import TopTracksList from './TopTracksList'
import { useEffect } from 'react'
import { Track } from '../../../utils/types/track'
import axios from 'node_modules/axios/index'
import CreatePlaylist from '@components/buttons/CreatePlaylist'
import styled from 'styled-components'
type Props = {}
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const TopTracks: FunctionComponent<Props> = ({}) => {
  const [term, setTerm] = useState('short_term')
  const [tracks, setTracks] = useState<Track[]>([])
  useEffect(() => {
    ;(async () =>
      setTracks(
        (
          await axios.get(
            `${process.env.API_URL}profile/toptracks?term=${term}`
          )
        ).data
      ))()
  }, [term])
  return (
    <Container loading={false}>
      <ProfileTitle>My top tracks </ProfileTitle>
      <TopSelect value={term} onChange={(v) => setTerm(v.target.value)}>
        <option value="short_term">short term</option>
        <option value="medium_term">medium term</option>
        <option value="long_term">long term</option>
      </TopSelect>
      <TopTracksList term={term} />
      <ButtonWrapper>
        <CreatePlaylist
          tracks={tracks.map(({ uri }) => uri)}
          playlistName={`Lyricsify // top tracks - ${term}`}
        />
      </ButtonWrapper>
    </Container>
  )
}
export default TopTracks
