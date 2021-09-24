import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10em;
`
const StyledTitle = styled.h2`
  font-size: 2em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledArtist = styled.span`
  letter-spacing: 0.06em;
  font-weight: 400;
`
const appear = keyframes`
  from {
    opacity: 0;
    transform: translate(100px, 100px) rotateZ(10deg);
  }
  to{
    opacity: 1;
    transform: translate(0)  rotateZ(0);
  }
`
const Button = styled.button`
  margin: 2rem;

  padding: 1rem 3rem;
  font-size: 1.5em;
  border: none;
  border-radius: 20px;
  outline: none;
  background-color: #00897b;
  color: white;
  font-weight: 900;
  transition: transform;
  transform: scale(1);
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    background-color: #009687;
  }
`
const Status = styled.div`
  font-size: 1.25em;
  background-color: #d68915;
  padding: 1em;
  animation: ${appear} 1000ms;
`
const Title = ({ info: { id, url, uri, name, artists, images } }) => {
  const [status, setStatus] = useState(null)
  const queueTrack = async () => {
    const result = await axios.get(`${process.env.API_URL}player/queue`, {
      params: { uri: uri },
    })
    setStatus(result.data)
  }
  const saveTrack = async () => {
    const result = await axios.get(`${process.env.API_URL}player/like`, {
      params: { id: id },
    })
    setStatus(result.data)
  }
  return (
    <StyledContainer id="home">
      <StyledTitle>
        {name}
        <StyledArtist>by {artists}</StyledArtist>
      </StyledTitle>
      <a target="_blank" href={url}>
        <img width="320" height="320" src={images[0].url} />
      </a>
      <Button onClick={queueTrack}>Add to queue</Button>
      <Button onClick={saveTrack}>Save a track</Button>
      {status && <Status>{status}</Status>}
    </StyledContainer>
  )
}

export default Title
