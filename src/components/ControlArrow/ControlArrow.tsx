import {
  ControlArrowStyled,
  ControlArrowSmallStyled
} from './ControlArrow.styled'
import { FC } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IControlArrow } from './types'

const ControlArrow: FC<IControlArrow> = ({
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
        className={className}
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
