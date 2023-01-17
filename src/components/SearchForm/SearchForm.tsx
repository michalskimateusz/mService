import { Form, Input } from './SearchForm.styled'
import React, { FC, MouseEvent } from 'react'
import Button from '../Button/Button'
import { useAppSelector } from '../../store/hooks'
import { selectGallery } from '../../features/gallery/gallerySlice'

interface ISearchForm {
  onSubmit: (e: MouseEvent<HTMLFormElement>) => void
  placeholder: string
  input: React.RefObject<HTMLInputElement>
}

const SearchForm: FC<ISearchForm> = ({ onSubmit, placeholder, input }) => {
  const { error } = useAppSelector(selectGallery)
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          required
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
      {error.status && <p>{error.message}</p>}
    </>
  )
}

export default SearchForm
