import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const StyledElement = styled.li`
  display: grid;
  grid-template-columns: 50px 64px 1fr;
  align-items: center;
  gap: 1em;
  margin: 1em 0;
  counter-increment: my-counter;
  transition: transform 500ms;
  transform: scale(1);
  cursor: pointer;
  :before {
    content: counter(my-counter) '.';
    margin-right: 2em;
    font-size: 1.75em;
  }
  position: relative;
  ::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #282828;
    transform: scaleX(0);
    transition: transform 500ms;
    transform-origin: 0 0;
    bottom: -5px;
  }
  :hover {
    transform: scale(1.05);
    ::after {
      transform: scaleX(1);
    }
  }
`
const TopTrack = ({ track: { id, images, name } }) => {
  return (
    <Link href="/track/[id]" as={`/track/${id}`}>
      <StyledElement>
        <img width={64} height={64} src={images[0].url} />
        {name}
      </StyledElement>
    </Link>
  )
}

export default TopTrack
