import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
type Props = {
  name: string
}
const StyledField = styled.p`
  padding: 0;
  font-size: 1.15em;
`
const StyledName = styled.span`
  color: #afafaf;
  padding-right: 0.15em;
`
const InfoField: FunctionComponent<Props> = ({ name, children }) => {
  return (
    <StyledField>
      <StyledName>{name}: </StyledName>
      {children}
    </StyledField>
  )
}
export default InfoField
