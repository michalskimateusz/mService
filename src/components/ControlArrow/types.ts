export interface IControlArrowStyledProps {
  size: string
  direction: string
}

export interface IControlArrowProps {
  isSmall?: boolean
  size: string
  direction: 'left' | 'right'
  onClick: () => void
  className?: string
}
