import { render, screen } from '@testing-library/react'

import Heading from './Heading'

test('Render title from title prop', () => {
  render(<Heading title="Hello world" />)
  const helloWorld = screen.getByText('Hello world')
  expect(helloWorld).toBeInTheDocument()
})
