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
