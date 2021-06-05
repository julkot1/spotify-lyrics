import { signIn, useSession } from 'next-auth/client'
import styled from 'styled-components'
const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 3em;
`
const StyledButton = styled.button`
  background-color: transparent;
  border: 3px solid #00564d;
  color: white;
  padding: 0.5em 1em;
  font-size: 1.5em;
  position: relative;
  z-index: 2;
  cursor: pointer;
  outline: none;
  ::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: #00564d;
    width: 100%;
    height: 100%;
    content: '';
    transform-origin: 0 0;
    transition: transform 500ms cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }
  :hover {
    ::before {
      transform: scaleX(1);
    }
  }
`
const Layout = ({ children }) => {
  const [session, loading] = useSession()
  if (loading) return null
  return (
    <div>
      {!session && (
        <StyledLogin>
          <StyledTitle>Not signed in</StyledTitle>
          <StyledButton onClick={signIn}>Sign In</StyledButton>
        </StyledLogin>
      )}
      {session && <>{children}</>}
    </div>
  )
}

export default Layout
