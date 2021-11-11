import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
const StyledItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 1em;
  padding: 1em;
  border: 2px solid #00564d;
  border-radius: 20px;
  transition: box-shadow 200ms ease-in-out;
  transition: transform 200ms ease-in-out;
  min-width: 40vw;
  :hover {
    transform: scale(1.03);
    box-shadow: 6px 6px 0px 0px #282828;
  }
`
const StyledInfo = styled.div`
  margin-left: 2em;
`
const TrackItem = ({ track: { name, artists, album, id, img } }) => {
  return (
    <Link href="/track/[id]" as={`/track/${id}`}>
      <StyledItem key={id}>
        <img width={64} height={64} src={img.url}></img>
        <StyledInfo>
          <p>{name}</p>
          <p>{artists}</p>
          <p>{album}</p>
        </StyledInfo>
      </StyledItem>
    </Link>
  )
}

export default TrackItem
