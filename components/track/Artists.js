import fetchArtists from '@utils/fetch/artists'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ArtistItem from './ArtistItem'
import { useSession } from 'next-auth/client'
const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #00897b;
  width: 100%;
  margin-top: 5em;
  padding: 2em;
`
const StyledTitle = styled.h2`
  font-size: 3em;
  margin: 1em 0;
  font-weight: bolder;
`
const Artists = ({ artists }) => {
  return (
    <StyledContainer id="artists">
      <StyledTitle>Artists</StyledTitle>
      {artists ? artists.map((art) => <ArtistItem artist={art} />) : <></>}
    </StyledContainer>
  )
}

export default Artists
