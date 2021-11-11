import React from 'react'
import styled from 'styled-components'
import AlbumList from './AlbumList'

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #c58045;
  align-items: center;
  width: 100%;
  padding: 2em;
  padding-top: 6em;
`
const AlbumInfoContainer = styled.div`
  display: flex;
`
const AlbumInfo = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 3em;
  font-size: 1.5em;
  h3 {
    font-size: 2.25em;
    margin: 0;
  }
`
const Album = ({
  album: { name, release_date, images, artists, total_tracks, url, tracks },
}) => {
  return (
    <StyledContainer id="album">
      <AlbumInfoContainer>
        <a target="_blank" href={url}>
          <img width={256} height={256} src={images[0].url} />
        </a>
        <AlbumInfo>
          <h3>{name}</h3>
          <p>
            <span>by {artists}</span> / <span>{total_tracks} tracks</span> /{' '}
            <span>{release_date}</span>
          </p>
        </AlbumInfo>
      </AlbumInfoContainer>
      <AlbumList tracks={tracks} />
    </StyledContainer>
  )
}

export default Album
