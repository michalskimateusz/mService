import { DescriptionStyled } from './Description.styled'
import { FC } from 'react'
import { IDescription } from './types'

const Description: FC<IDescription> = ({ children }) => {
  return <DescriptionStyled>{children}</DescriptionStyled>
}

export default Description
