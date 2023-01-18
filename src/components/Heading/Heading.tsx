import { HeadingStyled } from './Heading.styled'
import { FC } from 'react'
import { IHeading } from './types'

const Heading: FC<IHeading> = ({ title }) => {
  return <HeadingStyled>{title}</HeadingStyled>
}

export default Heading
