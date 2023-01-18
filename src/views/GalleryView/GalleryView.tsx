import { FC, MouseEvent, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  filter,
  nextImage,
  prevImage,
  selectGallery,
  setImage
} from '../../store/gallerySlice'
import { IPhoto } from '../../store/gallerySlice/types'
import { Container } from '../HomeView/HomeView.styled'
import {
  ImageContainer,
  ImageBig,
  FormContainer,
  CardsContainer,
  CardsAndArrowsContainer,
  ImageAndSearchBarContainer
} from './GalleryView.styled'
import {
  CardComponent,
  ControlArrow,
  SearchForm,
  HeadingComponent,
  LoaderComponent
} from '../../components'
import NotFound from '../NotFound/NotFound'
import { fetchPhotos } from '../../store/gallerySlice/thunks/fetchPhotos'

const GalleryView: FC = () => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const { filteredPhotos, imageIndex, status } = useAppSelector(selectGallery)

  const cardId: HTMLElement | null = document.getElementById(`${imageIndex}`)
  const cardsContainer: Element | null = document.getElementById('cards')

  useEffect(() => {
    if (status !== 'idle' && status !== 'loading') {
      dispatch(fetchPhotos())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  useEffect(() => {
    if (cardId) {
      cardId.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  }, [cardId, imageIndex, filteredPhotos])

  const handleSearch = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchValue = inputRef?.current?.value
    dispatch(filter(searchValue))
    cardsContainer?.scrollTo({ left: 0, behavior: 'smooth' })
  }

  const scrollThumbnails = (value: number) => {
    if (!cardsContainer) return
    cardsContainer.scrollBy({
      top: 0,
      left: value,
      behavior: 'smooth'
    })
  }

  if (status === 'loading') {
    return <LoaderComponent />
  }

  if (status === 'failed') {
    return <NotFound />
  }

  return (
    <Container>
      <ImageAndSearchBarContainer>
        {filteredPhotos.length > 0 ? (
          <ImageContainer>
            <ControlArrow
              onClick={() => dispatch(prevImage())}
              size="3rem"
              direction="left"
            />
            <ImageBig
              src={filteredPhotos[imageIndex].url}
              alt={filteredPhotos[imageIndex].title}
            />
            <ControlArrow
              onClick={() => dispatch(nextImage())}
              size="5rem"
              direction="right"
            />
          </ImageContainer>
        ) : (
          <HeadingComponent title="Search through our database full of colorful squares" />
        )}

        <FormContainer className={filteredPhotos.length > 0 ? 'expand' : ''}>
          <SearchForm
            onSubmit={handleSearch}
            placeholder="Type something"
            input={inputRef}
          />
        </FormContainer>
      </ImageAndSearchBarContainer>

      {filteredPhotos.length > 0 && (
        <CardsAndArrowsContainer>
          <ControlArrow
            className="left"
            size="4rem"
            direction="left"
            onClick={() => scrollThumbnails(-500)}
            isSmall
          />
          <CardsContainer id="cards">
            {filteredPhotos &&
              filteredPhotos?.map((item: IPhoto, index: number) => (
                <CardComponent
                  className={imageIndex === index ? 'active' : ''}
                  key={item.id}
                  id={index.toString()}
                  background={`url(${item.thumbnailUrl})`}
                  text={item.title}
                  onClick={() => dispatch(setImage(index))}
                />
              ))}
          </CardsContainer>
          <ControlArrow
            className="right"
            size="4rem"
            direction="right"
            onClick={() => scrollThumbnails(500)}
            isSmall
          />
        </CardsAndArrowsContainer>
      )}
    </Container>
  )
}

export default GalleryView
