import { Outlet } from 'react-router-dom'
import { Header, Navbar, Main } from './RootLayout.styled'
import { LogoComponent, NavLinkComponent } from '../../components'
import { URL_PATHS } from '../../constants/urlPaths'

const RootLayout = () => {
  return (
    <>
      <Header>
        <LogoComponent
          to={URL_PATHS.HOME}
          title="mSquares"
        />
        <Navbar>
          <NavLinkComponent
            title="Home"
            to={URL_PATHS.HOME}
          />
          <NavLinkComponent
            title="Search"
            to={URL_PATHS.GALLERY}
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
