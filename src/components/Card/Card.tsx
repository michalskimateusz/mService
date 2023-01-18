import { CardStyled } from './Card.styled'
import React, { FC } from 'react'
import CardTitle from './CardTitle'
import { ICard } from './types'

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
