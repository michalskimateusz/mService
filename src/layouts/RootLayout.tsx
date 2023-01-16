import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { reset } from "../features/counter/counterSlice";
import { Header, Logo, Navbar, NavLinks, Main } from "./RootLayout.styled";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  const resetState = () => {
    dispatch(reset());
  };

  return (
    <>
      <Header>
        <Logo to="/" onClick={resetState}>
          mSquares
        </Logo>
        <Navbar>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/gallery" onClick={resetState}>
            Search
          </NavLinks>
        </Navbar>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default RootLayout;
