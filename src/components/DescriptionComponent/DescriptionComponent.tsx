import { DescriptionComponentStyled } from './DescriptionComponent.styled'
import { FC } from 'react'
import { IDescriptionProps } from './types'

const DescriptionComponent: FC<IDescriptionProps> = ({ children }) => {
  return <DescriptionComponentStyled>{children}</DescriptionComponentStyled>
}

export default DescriptionComponent
