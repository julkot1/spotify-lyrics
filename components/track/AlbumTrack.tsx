import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const StyledElement = styled.li`
  font-size: 1.12em;
  list-style: lower-alpha;
  display: grid;
  grid-template-columns: 50px 1fr 1fr;
  counter-increment: my-counter;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  padding: 0 1em;
  transform: scale(1);
  transition: transform 100ms;
  :hover {
    background-color: #ccb47a;
    border-radius: 20px;
    transform: scale(1.02);
  }
  :before {
    content: counter(my-counter) '.';
    margin-right: 10px;
  }
`
const AlbumTrack = ({ track: { name, artists, id } }) => {
  return (
    <Link href="/track/[id]" as={`/track/${id}`}>
      <StyledElement key={id}>
        <p>{name}</p>
        <p>{artists}</p>
      </StyledElement>
    </Link>
  )
}

export default AlbumTrack
