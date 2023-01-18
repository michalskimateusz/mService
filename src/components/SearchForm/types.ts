import React, { MouseEvent } from 'react'

export interface ISearchFormProps {
  onSubmit: (e: MouseEvent<HTMLFormElement>) => void
  placeholder: string
  input: React.RefObject<HTMLInputElement>
}
