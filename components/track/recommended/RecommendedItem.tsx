import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledItem = styled.li`
  margin: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    position: relative;
  }
  img:hover + div,
  div:hover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    font-size: 1.25em;
    width: 256px;
    height: 256px;
    font-weight: bold;
    padding: 1em;
    background-color: rgba(52, 182, 209, 0.75);
    cursor: pointer;
  }
`
const Info = styled.div`
  display: none;
  position: absolute;
`
const StyledP = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  width: 90%;
`
const RecommendedItem = ({ track: { name, images, artists, id } }) => {
  return (
    <StyledItem>
      <img src={images[0].url} width="256" height="256" />
      <Link href="/track/[id]" as={`/track/${id}`}>
        <Info>
          <StyledP>{name}</StyledP> <StyledP>{artists}</StyledP>
        </Info>
      </Link>
    </StyledItem>
  )
}

export default RecommendedItem
