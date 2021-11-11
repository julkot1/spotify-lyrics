import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import Link from 'next/link'
const StyledContainer = styled.div`
  background-color: #373b47;
  display: flex;
  min-width: 15%;
  cursor: pointer;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.25em 1em;
  p {
    margin: 0;
    padding: 0;
  }
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 6px;
`
const PlayerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`
const Icon = styled.img`
  width: 32px;
  height: 32px;
  animation: ${spin} 2s linear 0s infinite;
`
const Player = () => {
  const [track, setTrack] = useState(null)
  const fetchPlayer = async () => {
    const result = await axios(`${process.env.API_URL}player/currenttrack`)
    setTrack(result.data)
  }
  useEffect(() => {
    fetchPlayer()
    setInterval(async () => {
      await fetchPlayer()
    }, 8000)
  }, [])
  return (
    <>
      {track ? (
        <Link href="/track/[id]" as={`/track/${track.id}`}>
          <StyledContainer>
            <img width="48" height="48" src={track.images[0].url} />
            <PlayerWrapper>
              <Info>
                <p>{track.name}</p>
                <p> {track.artists}</p>
              </Info>
              <IconContainer>
                <Icon src="/player-icon.svg" />
              </IconContainer>
            </PlayerWrapper>
          </StyledContainer>
        </Link>
      ) : (
        <></>
      )}
    </>
  )
}

export default Player
