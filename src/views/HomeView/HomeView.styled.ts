import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  animation: ${animation} 1s ease-out;

  &.animation {
  }
`

export const Heading = styled.h1`
  font-size: 3rem;
`

export const Description = styled.p`
  margin: 2rem 0;
  font-size: 1.6rem;
  text-align: justify;
`

export const SearchBtn = styled(Link)`
  font-size: 3rem;
  font-weight: 500;
  color: white;
  background: #ae0000;
  padding: 1rem 5rem;
  border-radius: 10rem;
  transition: all 0.2s ease-in;

  &:hover,
  &.active {
    background: #850000;
  }
`
