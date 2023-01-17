import { CardTitleStyled } from './CardTitle.styled'
import { FC } from 'react'

interface ICardTitle {
  text: string
}

const CardTitle: FC<ICardTitle> = ({ text }) => {
  return <CardTitleStyled>{text}</CardTitleStyled>
}

export default CardTitle
