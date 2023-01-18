import { Container } from './NotFound.styled'
import { Heading, Description, Button } from '../../components'

const NotFound = () => {
  return (
    <Container>
      <Heading title="Sorry!" />
      <Description>Something went wrong</Description>
      <Button
        title="Go back to main page"
        to="/"
        isLink
      />
    </Container>
  )
}

export default NotFound
