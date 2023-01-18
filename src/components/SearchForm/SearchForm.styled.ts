import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-3rem);
  }
  50% {
    opacity: 0;
    transform: translateY(-3rem);
  }
  100% {  
    opacity: 1; 
    transform: translateY(0);
  }
`

export const Form = styled.form`
  position: relative;
  z-index: 2;
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

export const Notification = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  color: #ae0000;
  animation: ${animation} 0.5s ease-in;
`
