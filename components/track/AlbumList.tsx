import React from 'react'
import AlbumTrack from './AlbumTrack'
import styled from 'styled-components'
const StyledList = styled.ol`
  width: 80%;
`
const AlbumList = ({ tracks }) => {
  return (
    <StyledList>
      {tracks.map((track) => (
        <AlbumTrack track={track} />
      ))}
    </StyledList>
  )
}

export default AlbumList
