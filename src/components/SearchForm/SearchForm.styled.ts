import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
`

export const Input = styled.input`
  width: 40rem;
  height: 4rem;
  font-size: 2rem;
  padding: 0 2rem;
  border: none;
  border-radius: 10rem;
  box-shadow: 0 5px 20px -8px rgba(0, 0, 0, 0.5);

  &::placeholder {
    font-size: 2rem;
    color: #e8e8e8;
  }

  &:focus {
    outline: none;
  }
`
