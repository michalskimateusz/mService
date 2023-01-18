import { useAppDispatch } from '../../store/hooks'
import { reset } from '../../features/gallery/gallerySlice'
import { Container } from './HomeView.styled'
import { Button, Description } from '../../components/'
import { Heading } from '../../components'

const HomeView = () => {
  const dispatch = useAppDispatch()

  const resetState = () => {
    dispatch(reset())
  }

  return (
    <Container>
      <Heading title="Welcome to mSquares gallery" />
      <Description>
        We invite you to check out our big collection of colorful squares.
        <br />
        Each square have unique name taken from 'lorem ipsum'.
      </Description>
      <Button
        to="/gallery"
        isLink
        title="search squares"
        onClick={resetState}
      />
    </Container>
  )
}

export default HomeView
