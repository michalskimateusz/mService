import styled from 'styled-components'
import { ICardStyled } from './types'

export const CardStyled = styled.div.attrs<ICardStyled>((props) => ({
  style: {
    backgroundImage: props.background
  }
}))<ICardStyled>`
  display: flex;
  flex-direction: column-reverse;
  width: 13rem;
  height: 18rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.2s;
  background-size: contain;

  &:hover,
  &.active {
    scale: 102%;
    box-shadow: 0 6px 17px -8px rgba(0, 0, 0, 0.5);
    transform: translateY(-0.5rem);

    & > div {
      height: 10rem;
      overflow: visible;
      white-space: normal;
    }
  }
`
