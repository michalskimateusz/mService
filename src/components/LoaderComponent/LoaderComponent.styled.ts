import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }

`

export const LoaderIcon = styled.div`
  font-size: 10rem;
  animation: ${animation} 2s infinite linear;
`
