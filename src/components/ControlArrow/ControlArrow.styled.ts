import styled from 'styled-components'
import { IControlArrowStyledProps } from './types'

export const ControlArrowStyled = styled.span<IControlArrowStyledProps>`
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
`

export const ControlArrowSmallStyled = styled(ControlArrowStyled)`
  position: absolute;
  z-index: 2;
  height: 85%;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`
