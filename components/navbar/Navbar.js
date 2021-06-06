import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Player from './Player'
const StyledNav = styled.nav`
  width: 100%;
  background-color: #4b5162;
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h2`
  color: #00897b;
  font-size: 1.7em;
  margin: 0;
  margin-right: 1em;
  cursor: pointer;
`
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.a`
  margin: 0 1em;
  padding: 0.5em 1em;
  :hover {
    background-color: #373b47;
  }
`
const Navbar = () => {
  return (
    <StyledNav>
      <Left>
        <Link href="/">
          <Title>Lyricsify</Title>
        </Link>
        <Button href="#home">Overview</Button>
        <Button href="#artists">Artists</Button>
        <Button href="#lyrics">Lyrics</Button>
        <Button href="#album">Album</Button>
      </Left>
      <Player />
    </StyledNav>
  )
}

export default Navbar
