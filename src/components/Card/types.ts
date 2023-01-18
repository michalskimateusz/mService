export interface ICardTitle {
  text: string
}

export interface ICard {
  onClick: () => void
  background: string
  text: string
  className: string
  id: string
}

export interface ICardStyled {
  background: string
}
