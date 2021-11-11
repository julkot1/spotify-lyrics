import styled from 'styled-components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecommendedList from './RecommendedList'
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
const RecommendedTracks = ({ recommendations }) => {
  return (
    <>
      {recommendations ? (
        <StyledContainer id="recommended">
          <StyledTitle>Recommended Tracks</StyledTitle>
          <RecommendedList tracks={recommendations} />
        </StyledContainer>
      ) : null}
    </>
  )
}

export default RecommendedTracks
