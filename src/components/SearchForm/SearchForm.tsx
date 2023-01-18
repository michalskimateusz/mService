import { Form, Input, Notification } from './SearchForm.styled'
import React, { FC } from 'react'
import Button from '../Button/Button'
import { useAppSelector } from '../../store/hooks'
import { selectGallery } from '../../features/gallery/gallerySlice'
import { ISearchForm } from './types'

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
      {error.status && <Notification>{error.message}</Notification>}
    </>
  )
}

export default SearchForm
