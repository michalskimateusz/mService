import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledButton = styled.button`
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
    height: 4rem;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    color: #ededed;
    background: #ae0000;
    border: none;
    border-radius: 10rem;
    padding: 0 5rem;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.2s;

    &:hover {
      background: #850000;
      color: white;
    }
  }
`

export const StyledButtonLink = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  color: white;
  background: #ae0000;
  padding: 1rem 5rem;
  border-radius: 10rem;
  transition: all 0.2s;

  &:hover {
    background: #850000;
    color: white;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`
