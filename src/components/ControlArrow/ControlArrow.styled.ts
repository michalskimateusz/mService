import styled from 'styled-components'
import { IControlArrowStyled } from './types'

export const ControlArrowStyled = styled.span<IControlArrowStyled>`
  display: flex;
  justify-content: center;
  align-self: stretch;
  font-size: ${(props) => props.size};
  cursor: pointer;
  color: #636565;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    color: black;
    transform: scale(110%);
  }

  &.disabled {
    color: #d7d7d7;
    cursor: not-allowed;
  }
`

export const ControlArrowSmallStyled = styled(ControlArrowStyled)`
  position: absolute;
  z-index: 2;
  top: 12.5rem;

  &.left {
    left: -5rem;
  }

  &.right {
    right: -5rem;
  }
`
