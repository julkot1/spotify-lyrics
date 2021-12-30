import { green } from '@utils/style/colors'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
type Props = {
  onClick: Function
}
const StyledButton = styled.button`
  background-color: transparent;
  border: 3px solid ${green};
  color: white;
  padding: 0.5em 1em;
  font-size: 1.5em;
  position: relative;
  z-index: 2;
  cursor: pointer;
  outline: none;
  transition: transform 500ms ease-in-out;
  ::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: ${green};
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
  :active {
    transform: scale(0.75);
  }
`
const Button: FunctionComponent<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>
}
export default Button
