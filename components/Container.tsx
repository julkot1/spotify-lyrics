import { green } from '@utils/style/colors'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
type Props = {
  loading: boolean
}
const StyledWrapper = styled.section`
  margin: 1em;
  padding: 2em;
  border: 2px solid ${green};
  border-radius: 20px;
  box-shadow: 6px 6px 0px 0px #282828;
`
const Container: FunctionComponent<Props> = ({ children, loading }) => {
  return (
    <React.Fragment>
      {loading ? <></> : <StyledWrapper>{children}</StyledWrapper>}
    </React.Fragment>
  )
}
export default Container
