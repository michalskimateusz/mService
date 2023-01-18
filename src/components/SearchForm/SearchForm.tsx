import { Form, Input, Notification } from './SearchForm.styled'
import React, { FC } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { useAppSelector } from '../../store/hooks'
import { selectGallery } from '../../store/gallerySlice'
import { ISearchFormProps } from './types'

const SearchForm: FC<ISearchFormProps> = ({ onSubmit, placeholder, input }) => {
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
        <ButtonComponent
          to=""
          title="search"
        />
      </Form>
      {error.status && <Notification>{error.message}</Notification>}
    </>
  )
}

export default SearchForm
