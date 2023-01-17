import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export const LogoStyled = styled(Link)`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  background-image: url('${logo}');
  background-size: cover;
  padding: 0 1rem;
`
