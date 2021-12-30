import { background, green } from '@utils/style/colors'
import React, { ChangeEventHandler, FunctionComponent } from 'react'
import styled from 'styled-components'
type Props = {
  onChange: ChangeEventHandler<any>
  value: string
}
const StyledSelect = styled.select`
  background-color: ${background};
  color: white;
  font-size: 1.5rem;
  border: none;
  padding: 5px 0;
  appearance: button;
  margin: 0;
  outline: none;
  border-bottom: 2px solid ${green};
  ::active {
    border: none;
  }
`
const TopSelect: FunctionComponent<Props> = ({ children, onChange, value }) => {
  return (
    <StyledSelect onChange={onChange} value={value}>
      {children}
    </StyledSelect>
  )
}
export default TopSelect
