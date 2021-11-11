import React from 'react'
import { LoaderAlt } from '@styled-icons/boxicons-regular/LoaderAlt'
import styled, { keyframes } from 'styled-components'
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Icon = styled(LoaderAlt)`
  width: 10%;
  animation: ${rotate} 1000ms infinite cubic-bezier(0.13, 0.46, 0.68, 0.06);
`
const Loading = () => {
  return (
    <StyledContainer>
      <Icon />
    </StyledContainer>
  )
}

export default Loading
