import React, { MouseEvent, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  dataState,
  fetchData,
  filter,
  nextImage,
  prevImage,
  selectGallery,
  setImage
} from '../../features/gallery/gallerySlice'
import {
  Container,
  ImageContainer,
  ImageBig,
  FormContainer,
  WelcomeScreen,
  CardsContainer,
  CardsAndArrowsContainer
} from './GalleryView.styled'
import { Card, ControlArrow, SearchForm } from '../../components'

const GalleryView = () => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const { data, filteredData, imageIndex } = useAppSelector(selectGallery)

  const cardId: HTMLElement | null = document.getElementById(`${imageIndex}`)
  const cardsContainer: Element | null = document.querySelector('#cards')

  useEffect(() => {
    dispatch(fetchData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (cardId) {
      cardId.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  }, [cardId, imageIndex])

  const handleSearch = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!data) return
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

  return (
    <Container>
      {filteredData.length > 0 ? (
        <ImageContainer>
          <ControlArrow
            onClick={() => dispatch(prevImage())}
            size="5rem"
            direction="left"
            className={imageIndex < 1 ? 'disabled' : ''}
          />
          <ImageBig
            src={filteredData[imageIndex].url}
            alt={filteredData[imageIndex].title}
          />
          <ControlArrow
            onClick={() => dispatch(nextImage())}
            size="5rem"
            direction="right"
            className={imageIndex < filteredData.length - 1 ? '' : 'disabled'}
          />
        </ImageContainer>
      ) : (
        <WelcomeScreen>
          Search through our database full of colorful squares
        </WelcomeScreen>
      )}

      <FormContainer className={filteredData.length > 0 ? 'expand' : ''}>
        <SearchForm
          onSubmit={handleSearch}
          placeholder="Type something"
          input={inputRef}
        />
      </FormContainer>

      {filteredData.length > 0 && (
        <CardsAndArrowsContainer>
          <ControlArrow
            className="left"
            size="4rem"
            direction="left"
            onClick={() => scrollThumbnails(-300)}
            isSmall
          />
          <CardsContainer id="cards">
            {filteredData &&
              filteredData?.map((item: dataState, index: number) => (
                <Card
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
            onClick={() => scrollThumbnails(300)}
            isSmall
          />
        </CardsAndArrowsContainer>
      )}
    </Container>
  )
}

export default GalleryView
