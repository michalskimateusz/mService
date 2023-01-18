import styled from 'styled-components'

export const ImageAndSearchBarContainer = styled.div`
  position: relative;
`

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

export const ImageBig = styled.img`
  @media screen and (min-width: 600px) {
    max-width: 60rem;
    border-radius: 10px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  &.expand {
    position: absolute;
    left: calc((100% - 25rem) / 2);
    bottom: 0;

    @media screen and (min-width: 600px) {
      left: calc((100% - 40rem) / 2);
      bottom: 0;
    }
  }
`

export const CardsAndArrowsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardsContainer = styled.div`
  max-width: 100vw;
  height: 22rem;
  padding: 0 1rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    display: none;
    @media screen and (min-width: 425px) {
      display: block;
      width: 1.5rem;
    }
  }

  ::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ae0000;
    border-radius: 1rem;
  }

  @media screen and (min-width: 600px) {
    display: grid;
    grid-auto-flow: column;
    width: 60rem;
    height: 22rem;
  }
`
