import styled from 'styled-components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecommendedList from './RecommendedList'
import CreatePlaylist from '@components/buttons/CreatePlaylist'
const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #3b64c4;
  width: 100%;
  padding: 2em;
  padding-top: 6em;
`
const StyledTitle = styled.h2`
  font-size: 3em;
  margin: 1em 0;
  font-weight: bolder;
`
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 3em;
  justify-content: flex-end;
  font-size: 1.25rem;
  z-index: 0;
`
const RecommendedTracks = ({ name, artists, recommendations }) => {
  return (
    <>
      {recommendations ? (
        <StyledContainer id="recommended">
          <StyledTitle>Recommended Tracks</StyledTitle>
          <ButtonWrapper>
            <CreatePlaylist
              playlistName={`Lyricsify // recommended ${name} by ${artists}`}
              tracks={recommendations.map(({ uri }) => uri)}
            />
          </ButtonWrapper>
          <RecommendedList tracks={recommendations} />
        </StyledContainer>
      ) : null}
    </>
  )
}

export default RecommendedTracks
