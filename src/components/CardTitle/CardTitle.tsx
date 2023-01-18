import { CardTitleStyled } from './CardTitle.styled'
import { FC } from 'react'
import { ICardTitleProps } from '../CardComponent/types'

const CardTitle: FC<ICardTitleProps> = ({ text }) => {
  return <CardTitleStyled>{text}</CardTitleStyled>
}

export default CardTitle
