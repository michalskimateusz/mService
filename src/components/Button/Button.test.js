import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

test('Calls onCLick function when clicked', () => {
  const handleClick = jest.fn()
  render(
    <Button
      title="button"
      to="/"
      onClick={handleClick}
    />
  )
  fireEvent.click(screen.getByText(/button/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
