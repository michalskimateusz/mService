import { Form, Input } from './SearchForm.styled'
import React, { FC, MouseEvent } from 'react'
import Button from '../Button/Button'

interface ISearchForm {
  onSubmit: (e: MouseEvent<HTMLFormElement>) => void
  placeholder: string
  input: React.RefObject<HTMLInputElement>
}

const SearchForm: FC<ISearchForm> = ({ onSubmit, placeholder, input }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        ref={input}
        autoFocus
        placeholder={placeholder}
      />
      <Button
        to=""
        title="search"
      />
    </Form>
  )
}

export default SearchForm
