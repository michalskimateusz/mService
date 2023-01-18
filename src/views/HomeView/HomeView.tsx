import { useAppDispatch } from '../../store/hooks'
import { reset } from '../../store/gallerySlice'
import { Container } from './HomeView.styled'
import { ButtonComponent, DescriptionComponent } from '../../components/'
import { HeadingComponent } from '../../components'
import { FC } from 'react'

const HomeView: FC = () => {
  const dispatch = useAppDispatch()

  const resetState = () => {
    dispatch(reset())
  }

  return (
    <Container>
      <HeadingComponent title="Welcome to mSquares gallery" />
      <DescriptionComponent>
        We invite you to check out our big collection of colorful squares.
        <br />
        Each square have unique name taken from 'lorem ipsum'.
      </DescriptionComponent>
      <ButtonComponent
        to="/gallery"
        isLink
        title="search squares"
        onClick={resetState}
      />
    </Container>
  )
}

export default HomeView
