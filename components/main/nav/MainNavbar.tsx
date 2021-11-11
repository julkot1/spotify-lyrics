import React from 'react'
import styled from 'styled-components'
import NavButton from './NavButton'
import { signOut, useSession } from 'next-auth/client'
import ProfileIcon from './ProfileIcon'

const StyledWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
`
const MainNavbar = () => {
  return (
    <StyledWrapper>
      <ProfileIcon />
      <NavButton onClick={() => signOut()}>sign out</NavButton>
    </StyledWrapper>
  )
}

export default MainNavbar
