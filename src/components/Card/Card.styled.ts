import styled from 'styled-components'

interface ICardStyled {
  background: string
}
export const CardStyled = styled.div.attrs<ICardStyled>((props) => ({
  style: {
    backgroundImage: props.background
  }
}))<ICardStyled>`
  display: flex;
  flex-direction: column-reverse;
  width: 15rem;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.2s;
  background-size: contain;

  &.active {
    box-shadow: 0 6px 17px -8px rgba(0, 0, 0, 0.5);
    transform: translateY(-0.5rem);
  }

  &:hover {
    scale: 102%;

    & > div {
      height: 10rem;
      overflow: visible;
      white-space: normal;
    }
  }
`
