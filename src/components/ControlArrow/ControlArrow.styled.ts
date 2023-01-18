import styled from 'styled-components'
import { IControlArrowStyled } from './types'

export const ControlArrowStyled = styled.span<IControlArrowStyled>`
  display: flex;
  justify-content: center;
  height: 90%;
  font-size: 3rem;
  cursor: pointer;
  color: #3b3c3c;
  transition: all 0.2s;
  user-select: none;
  position: absolute;
  top: 5%;

  &:first-child {
    left: 2%;
  }

  &:nth-child(3) {
    right: 2%;
  }

  &:hover {
    transform: scale(110%);
  }

  &:active {
    transform: scale(90%);
  }

  &.disabled {
    color: #d7d7d7;
    cursor: not-allowed;
  }
`

export const ControlArrowSmallStyled = styled(ControlArrowStyled)`
  position: absolute;
  z-index: 2;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`
