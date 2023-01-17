import { CardStyled } from './Card.styled'
import { FC } from 'react'
import CardTitle from './CardTitle'

interface ICard {
  onClick: () => void
  background: string
  text: string
  className: string
}

const Card: FC<ICard> = ({ onClick, background, text, className }) => {
  return (
    <CardStyled
      className={className}
      onClick={onClick}
      background={background}
    >
      <CardTitle text={text} />
    </CardStyled>
  )
}

export default Card
