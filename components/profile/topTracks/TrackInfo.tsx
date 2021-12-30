import { blue, green } from '@utils/style/colors'
import { Track } from '@utils/types/track'
import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
type Props = { track: Track; index: number }
const disappear = keyframes`
  from{
   transform: translateY(0);
  }
  to{
    transform: translateY(200px);
  }
`
const StyledWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  animation: ${disappear} forwards 0.5s;
  background-color: ${green + '9a'};
  padding: 10px;
`
const StyledP = styled.p`
  padding: 0;
  font-size: 1.05rem;
  font-weight: 700;
`
const TrackInfo: FunctionComponent<Props> = ({
  track: { name, artists },
  index,
}) => {
  return (
    <StyledWrapper>
      <StyledP>
        {index}. {name}
      </StyledP>
      <StyledP>{artists}</StyledP>
    </StyledWrapper>
  )
}
export default TrackInfo
