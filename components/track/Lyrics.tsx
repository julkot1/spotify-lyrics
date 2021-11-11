import React from 'react'
import styled from 'styled-components'
const Text = styled.div`
  text-align: center;
  font-size: 1.25em;
  margin-top: -1em;
  background-color: #1373bd;
  padding: 2em;
`
const Lyrics = ({ lyrics }) => {
  return (
    <Text id="lyrics">
      <h3>Lyrics</h3>
      {lyrics ? lyrics.split('\n').map((str) => <p>{str}</p>) : 'Not Found'}
    </Text>
  )
}

export default Lyrics
