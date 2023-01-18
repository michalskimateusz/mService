import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 0 5rem;
  height: 5rem;
  background: #f5f5f5;
  position: fixed;
  box-shadow: 0 5px 24px -10px rgba(0, 0, 0, 0.5);
  z-index: 2;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`

export const Navbar = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    gap: 2rem;
  }
`

export const Main = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 0;

  @media screen and (min-width: 768px) {
    //padding: 0 5rem;
  }
`
