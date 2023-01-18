import { render, screen } from '@testing-library/react'

import HeadingComponent from './HeadingComponent'

test('Render title from title prop', () => {
  render(<HeadingComponent title="Hello world" />)
  const helloWorld = screen.getByText('Hello world')
  expect(helloWorld).toBeInTheDocument()
})
