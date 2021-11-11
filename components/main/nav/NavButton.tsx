import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href?: string
  onClick?: Function
}
const StyledLink = styled.p`
  cursor: pointer;
  padding: 0 10px;
  :hover {
    text-decoration: underline;
  }
`
const NavButton: FunctionComponent<Props> = ({ children, href, onClick }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <StyledLink>{children || children}</StyledLink>
        </Link>
      ) : (
        <>
          {onClick ? (
            <StyledLink onClick={() => onClick()}>
              {children || children}
            </StyledLink>
          ) : (
            { children }
          )}
        </>
      )}
    </>
  )
}

export default NavButton
