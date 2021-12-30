import { green } from '@utils/style/colors'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
type Props = {
  type: 'next' | 'prev'
  page: number
  setPage: Function
}
const StyledButton = styled.button`
  background-color: ${green};
  outline: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  border-radius: 20px;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 200ms ease-in-out;
  cursor: pointer;
  :hover:enabled {
    transform: scale(1.05);
  }
  :active {
    background-color: ${green + 'e2'};
  }
  :disabled {
    cursor: default;
    background-color: transparent;
    border: 2px solid ${green};
  }
`
const NavigationButton: FunctionComponent<Props> = ({
  page,
  type,
  setPage,
}) => {
  const handleClick = () => {
    if (type === 'next' && page < 4) {
      setPage(page + 1)
    }
    if (type === 'prev' && page != 1) setPage(page - 1)
  }
  return (
    <StyledButton
      disabled={
        !((page < 4 && type === 'next') || (page != 1 && type === 'prev'))
      }
      onClick={handleClick}
    >
      {type}
    </StyledButton>
  )
}
export default NavigationButton
