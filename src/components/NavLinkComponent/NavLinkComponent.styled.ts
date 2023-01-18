import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavLinkComponentStyled = styled(NavLink)`
  font-size: 2rem;
  font-weight: 500;
  color: #636565;
  transition: all 0.2s ease-in;

  &.active {
    color: #868989;
  }

  &:after {
    display: block;
    content: '';
    border-bottom: 3px solid #e41609;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover:after,
  &.active:after {
    opacity: 1;
  }
`
