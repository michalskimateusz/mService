import { Outlet } from 'react-router-dom'
import { Header, Navbar, Main } from './RootLayout.styled'
import { Logo, Navlink } from '../../components'

const RootLayout = () => {
  return (
    <>
      <Header>
        <Logo
          to="/"
          title="mSquares"
        />
        <Navbar>
          <Navlink
            title="Home"
            to="/"
          />
          <Navlink
            title="Search"
            to="/gallery"
          />
        </Navbar>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default RootLayout
