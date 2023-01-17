import { FC } from 'react'
import { StyledButton, StyledButtonLink } from './Button.styled'

interface IButton {
  title: string
  onClick?: () => void
  to: string
  isLink?: boolean
}

const Button: FC<IButton> = ({ title, onClick, isLink, to }) => {
  if (isLink) {
    return (
      <StyledButtonLink
        to={to}
        onClick={onClick}
      >
        {title}
      </StyledButtonLink>
    )
  }

  return <StyledButton onClick={onClick}>{title}</StyledButton>
}

export default Button
