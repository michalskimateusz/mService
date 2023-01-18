import { CardTitleStyled } from './CardTitle.styled'
import { FC } from 'react'
import { ICardTitle } from './types'

const CardTitle: FC<ICardTitle> = ({ text }) => {
  return <CardTitleStyled>{text}</CardTitleStyled>
}

export default CardTitle
