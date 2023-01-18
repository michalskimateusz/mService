import { HeadingComponentStyled } from './HeadingComponent.styled'
import { FC } from 'react'
import { IHeadingProps } from './types'

const HeadingComponent: FC<IHeadingProps> = ({ title }) => {
  return <HeadingComponentStyled>{title}</HeadingComponentStyled>
}

export default HeadingComponent
