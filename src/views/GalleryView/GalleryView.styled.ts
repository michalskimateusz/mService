import styled from 'styled-components'
import { animation } from '../HomeView/HomeView.styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 8rem;
  animation: ${animation} 1s ease-out;
`

export const WelcomeScreen = styled.h2`
  margin-top: 20rem;
  font-size: 3rem;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: min-content;
  gap: 1rem;
`

// export const Arrow = styled.span`
//   display: flex;
//   justify-content: center;
//   align-self: stretch;
//   font-size: 5rem;
//   cursor: pointer;
//   color: #636565;
//   transition: all 0.2s;
//   user-select: none;
//
//   &:hover {
//     color: black;
//     transform: scale(110%);
//   }
//
//   &.disabled {
//     color: #d7d7d7;
//     cursor: not-allowed;
//   }
// `;

export const ImageBig = styled.img`
  width: 55rem;
  border-radius: 10px;
`

export const FormContainer = styled.div`
  margin: 3rem 0;

  &.expand {
    position: absolute;
    top: 50rem;
  }
`

// export const Form = styled.form`
//   position: relative;
// `;
//
// export const Input = styled.input`
//   width: 40rem;
//   height: 4rem;
//   font-size: 2rem;
//   padding: 0 2rem;
//   border: none;
//   border-radius: 10rem;
//   box-shadow: 0 5px 20px -8px rgba(0, 0, 0, 0.5);
//
//   &::placeholder {
//     font-size: 2rem;
//     color: #e8e8e8;
//   }
//
//   &:focus {
//     outline: none;
//   }
// `;
//
// export const SearchBtn = styled.button`
//   height: 4rem;
//   font-size: 2rem;
//   color: #ededed;
//   background: #ae0000;
//   border: none;
//   padding: 0 3rem;
//   border-radius: 10rem;
//   position: absolute;
//   right: 0;
//   top: 0;
//   cursor: pointer;
//   transition: all 0.3s;
//
//   &:hover {
//     color: white;
//     background: #850000;
//   }
// `;

export const CardsAndArrowsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardsContainer = styled.div`
  width: 65rem;
  height: 25rem;
  margin-top: 3rem;
  padding: 0 1rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track {
    background: #d9d9d9;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ae0000;
    border-radius: 1rem;
  }
`

// export const ScrollBtn = styled.span`
//   position: absolute;
//   z-index: 2;
//   border: none;
//   background: transparent;
//   cursor: pointer;
//   color: #636565;
//   transition: all 0.2s;
//   user-select: none;
//   font-size: 4rem;
//   top: 12.5rem;
//
//   &.left {
//     left: -5rem;
//   }
//
//   &.right {
//     right: -5rem;
//   }
//
//   &:hover {
//     color: black;
//     transform: scale(110%);
//   }
// `;
//
// export const Card = styled.div.attrs((props) => ({
//   style: {
//     backgroundImage: props.datatype,
//   },
// }))`
//   display: flex;
//   flex-direction: column-reverse;
//   width: 15rem;
//   height: 20rem;
//   border-radius: 1rem;
//   overflow: hidden;
//   transition: all 0.2s;
//   background-size: contain;
//
//   &:hover {
//     scale: 102%;
//
//     & > div {
//       height: 10rem;
//       overflow: visible;
//       white-space: normal;
//     }
//   }
// `;
//
// export const CardTitleContainer = styled.div`
//   color: white;
//   font-size: 1.2rem;
//   height: 7rem;
//   width: 15rem;
//   padding: 0 1rem;
//   background: rgba(19, 19, 19, 0.25);
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   transition: all 0.2s;
// `;
