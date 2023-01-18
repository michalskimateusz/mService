import {
  ControlArrowStyled,
  ControlArrowSmallStyled
} from './ControlArrow.styled'
import { FC } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IControlArrowProps } from './types'

const ControlArrow: FC<IControlArrowProps> = ({
  size,
  direction,
  onClick,
  className,
  isSmall
}) => {
  if (isSmall) {
    return (
      <ControlArrowSmallStyled
        size={size}
        direction={direction}
        onClick={onClick}
      >
        {direction === 'left' && <FaChevronLeft />}
        {direction === 'right' && <FaChevronRight />}
      </ControlArrowSmallStyled>
    )
  }

  return (
    <ControlArrowStyled
      size={size}
      direction={direction}
      onClick={onClick}
      className={className}
    >
      {direction === 'left' && <FaChevronLeft />}
      {direction === 'right' && <FaChevronRight />}
    </ControlArrowStyled>
  )
}

export default ControlArrow
