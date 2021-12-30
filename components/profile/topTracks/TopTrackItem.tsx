import React, { FunctionComponent } from 'react'
import { Track } from '@utils/types/track'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import TrackInfo from './TrackInfo'
type Props = {
  track: Track
  index: number
}
const StyledItem = styled.li`
  margin: 15px;
  overflow: hidden;
  width: 15vw;
  height: 15vw;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    width: 25vw;
    height: 25vw;
  }
  @media only screen and (max-width: 600px) {
    width: 50vw;
    height: 50vw;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: transform 0.5s ease;
`
const appear = keyframes`
  from{
    transform: translateY(200px);
  }
  to{
     transform: translateY(0);
  }
`
const LinkWrapper = styled.div`
  position: relative;
  :hover > div {
    bottom: 0;
    animation: ${appear} 0.5s;
  }
  :hover > img {
    transform: scale(1.15);
  }
`
const TopTrackItem: FunctionComponent<Props> = ({ track, index }) => {
  return (
    <StyledItem key={track.name + ' by ' + track.artists}>
      <Link href="/track/[id]" as={`/track/${track.id}`}>
        <LinkWrapper>
          <TrackInfo track={track} index={index} />
          <StyledImage src={track.images[1].url} />
        </LinkWrapper>
      </Link>
    </StyledItem>
  )
}
export default TopTrackItem
