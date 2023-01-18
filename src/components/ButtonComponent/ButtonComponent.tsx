import { FC } from 'react'
import { StyledButton, StyledButtonLink } from './ButtonComponent.styled'
import { IButtonProps } from './types'

const ButtonComponent: FC<IButtonProps> = ({ title, onClick, isLink, to }) => {
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

export default ButtonComponent
