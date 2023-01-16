import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 5rem;
  height: 5rem;
  background: #f5f5f5;
  position: fixed;
  box-shadow: 0 5px 24px -10px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled(Link)`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  background-image: url("${logo}");
  background-size: cover;
  padding: 0 1rem;
`;

export const Navbar = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  gap: 2rem;
`;

export const NavLinks = styled(NavLink)`
  font-size: 2rem;
  font-weight: 500;
  color: #636565;
  transition: all 0.2s ease-in;

  &.active {
    color: #868989;
  }

  &:after {
    display: block;
    content: "";
    border-bottom: 3px solid #e41609;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover:after,
  &.active:after {
    opacity: 1;
  }
`;

export const Main = styled.main`
  padding: 0 5rem;
`;
