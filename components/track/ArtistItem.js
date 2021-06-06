import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import ArtistTopTracks from './ArtistTopTracks'
const ImageContainer = styled.a`
  transform: scale(1);
  transition: transform 200ms;
  :hover {
    transform: scale(1.05);
  }
  img {
    border-radius: 50%;
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`
const ArtistName = styled.h3`
  margin: 0 1em;
  font-size: 2em;
`
const Genres = styled.p`
  margin: 2em 0;
  font-size: 1.25em;
`
const ArtistItem = ({ artist }) => {
  return (
    <div>
      <Header>
        <ImageContainer href={artist.url} target="_blank">
          <Image width={96} height={96} src={artist.images[0]?.url} />
        </ImageContainer>
        <ArtistName>{artist.name}</ArtistName>
      </Header>
      <Genres>
        <h3>Genres:</h3>
        {artist.genres}
      </Genres>
      <ArtistTopTracks tracks={artist.topTracks} />
    </div>
  )
}

export default ArtistItem
