import { LogoComponentStyled } from './LogoComponent.styled'
import { useAppDispatch } from '../../store/hooks'
import { reset } from '../../store/gallerySlice'
import { FC } from 'react'
import { ILogoProps } from './types'

const LogoComponent: FC<ILogoProps> = ({ title, to }) => {
  const dispatch = useAppDispatch()

  const resetState = () => {
    dispatch(reset())
  }

  return (
    <LogoComponentStyled
      to={to}
      onClick={resetState}
    >
      {title}
    </LogoComponentStyled>
  )
}

export default LogoComponent
