import { render, screen, fireEvent } from '@testing-library/react'
import ButtonComponent from './ButtonComponent'

test('Calls onCLick function when clicked', () => {
  const handleClick = jest.fn()
  render(
    <ButtonComponent
      title="button"
      to="/"
      onClick={handleClick}
    />
  )
  fireEvent.click(screen.getByText(/button/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
