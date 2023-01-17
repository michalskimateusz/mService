import { NavlinkStyled } from './Navlink.styled'
import { FC } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { reset } from '../../features/gallery/gallerySlice'

interface INavlink {
  title: string
  to: string
}

const Navlink: FC<INavlink> = ({ title, to }) => {
  const dispatch = useAppDispatch()

  const resetState = () => {
    dispatch(reset())
  }

  return (
    <NavlinkStyled
      onClick={resetState}
      to={to}
    >
      {title}
    </NavlinkStyled>
  )
}

export default Navlink
