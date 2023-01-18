import { NavLinkComponentStyled } from './NavLinkComponent.styled'
import { FC } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { reset } from '../../store/gallerySlice'
import { INavlinkProps } from './types'

const NavLinkComponent: FC<INavlinkProps> = ({ title, to }) => {
  const dispatch = useAppDispatch()

  const resetState = () => {
    dispatch(reset())
  }

  return (
    <NavLinkComponentStyled
      onClick={resetState}
      to={to}
    >
      {title}
    </NavLinkComponentStyled>
  )
}

export default NavLinkComponent
