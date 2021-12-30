import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  padding: 0;
`
const ProfileTitle: FunctionComponent = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}
export default ProfileTitle
