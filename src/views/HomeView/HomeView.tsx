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
      <Heading
        title="Welcome to our lorem ipsum database of colorful squares.
"
      />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquam commodi consequatur distinctio doloremque et magni nesciunt
        nobis non officia optio provident quas quos sapiente similique unde
        velit vero, voluptates? Cumque deserunt doloremque error et ex, incidunt
        modi molestiae odit placeat ratione saepe sed veniam, voluptate!
        Assumenda aut delectus id iure nemo praesentium quibusdam ratione. Cum
        dolorum saepe tempora voluptates?
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
