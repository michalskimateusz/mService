import { LogoStyled } from './Logo.styled'
import { useAppDispatch } from '../../store/hooks'
import { reset } from '../../features/gallery/gallerySlice'
import { FC } from 'react'

interface ILogo {
  title: string
  to: string
}

const Logo: FC<ILogo> = ({ title, to }) => {
  const dispatch = useAppDispatch()

  const resetState = () => {
    dispatch(reset())
  }

  return (
    <LogoStyled
      to={to}
      onClick={resetState}
    >
      {title}
    </LogoStyled>
  )
}

export default Logo
