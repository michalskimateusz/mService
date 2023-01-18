import React, { MouseEvent } from 'react'

export interface ISearchForm {
  onSubmit: (e: MouseEvent<HTMLFormElement>) => void
  placeholder: string
  input: React.RefObject<HTMLInputElement>
}
