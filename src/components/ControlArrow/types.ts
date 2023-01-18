export interface IControlArrowStyled {
  size: string
  direction: string
}

export interface IControlArrow {
  isSmall?: boolean
  size: string
  direction: 'left' | 'right'
  onClick: () => void
  className?: string
}
