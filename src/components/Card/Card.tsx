import { CardStyled } from './Card.styled'
import React, { FC } from 'react'
import CardTitle from './CardTitle'

interface ICard {
  onClick: () => void
  background: string
  text: string
  className: string
  id: string
}

const Card: FC<ICard> = ({ onClick, background, text, className, id }) => {
  return (
    <CardStyled
      id={id}
      className={className}
      onClick={onClick}
      background={background}
    >
      <CardTitle text={text} />
    </CardStyled>
  )
}

export default Card
