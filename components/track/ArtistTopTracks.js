import React from 'react'
import styled from 'styled-components'
import TopTrack from './TopTrack'
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const ArtistTopTracks = ({ tracks }) => {
  return (
    <StyledContainer>
      <h3>Top tracks</h3>
      <ol>
        {tracks.map((track) => (
          <TopTrack track={track} />
        ))}
      </ol>
    </StyledContainer>
  )
}

export default ArtistTopTracks
