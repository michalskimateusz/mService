import { CardComponentStyled } from './CardComponent.styled'
import React, { FC } from 'react'
import CardTitle from '../CardTitle/CardTitle'
import { ICardProps } from './types'

const CardComponent: FC<ICardProps> = ({
  onClick,
  background,
  text,
  className,
  id
}) => {
  return (
    <CardComponentStyled
      id={id}
      className={className}
      onClick={onClick}
      background={background}
    >
      <CardTitle text={text} />
    </CardComponentStyled>
  )
}

export default CardComponent
