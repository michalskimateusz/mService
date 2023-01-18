import { Container } from './NotFound.styled'
import {
  HeadingComponent,
  DescriptionComponent,
  ButtonComponent
} from '../../components'
import { FC } from 'react'

const NotFound: FC = () => {
  return (
    <Container>
      <HeadingComponent title="Sorry!" />
      <DescriptionComponent>Something went wrong</DescriptionComponent>
      <ButtonComponent
        title="Go back to main page"
        to="/"
        isLink
      />
    </Container>
  )
}

export default NotFound
