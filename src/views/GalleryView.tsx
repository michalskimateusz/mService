import React, { MouseEvent, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  dataState,
  filter,
  nextImage,
  prevImage,
  setImage,
} from "../features/counter/counterSlice";
import { RootState } from "../app/store";
import {
  Container,
  ImageContainer,
  Arrow,
  ImageBig,
  FormContainer,
  WelcomeScreen,
  Input,
  SearchBtn,
  Form,
  Card,
  CardTitle,
  CardTitleContainer,
  CardsContainer,
  ScrollBtn,
  CardsAndArrowsContainer,
} from "./GalleryView.styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GalleryView = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const { filteredData, imageIndex } = useAppSelector(
    (state: RootState) => state.gallery
  );

  const handleSearch = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = inputRef?.current?.value;
    if (searchValue === "") return;
    dispatch(filter(searchValue));
  };

  const scrollThumbnails = (value: number) => {
    const cardsContainer = document.querySelector("#cards");
    if (cardsContainer) {
      cardsContainer.scrollBy({
        top: 0,
        left: value,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      {filteredData.length > 0 ? (
        <ImageContainer>
          <Arrow
            onClick={() => dispatch(prevImage())}
            className={imageIndex < 1 ? "disabled" : ""}
          >
            <FaChevronLeft />
          </Arrow>

          <ImageBig
            src={filteredData[imageIndex].url}
            alt={filteredData[imageIndex].title}
          />
          <Arrow
            onClick={() => dispatch(nextImage())}
            className={imageIndex < filteredData.length - 1 ? "" : "disabled"}
          >
            <FaChevronRight />
          </Arrow>
        </ImageContainer>
      ) : (
        <WelcomeScreen>
          Search through our database full of colorful squares
        </WelcomeScreen>
      )}

      <FormContainer className={filteredData.length > 0 ? "expand" : ""}>
        <Form onSubmit={handleSearch}>
          <Input
            type="text"
            ref={inputRef}
            autoFocus
            placeholder="Type something"
          />
          <SearchBtn>search</SearchBtn>
        </Form>
      </FormContainer>

      {filteredData.length > 0 && (
        <CardsAndArrowsContainer>
          <ScrollBtn className="left" onClick={() => scrollThumbnails(-200)}>
            <FaChevronLeft />
          </ScrollBtn>
          <CardsContainer id="cards">
            {filteredData &&
              filteredData?.map((item: dataState, index: number) => (
                <Card
                  key={item.id}
                  onClick={() => dispatch(setImage(index))}
                  datatype={`url(${item.thumbnailUrl})`}
                >
                  <CardTitleContainer>
                    <CardTitle>{item.title}</CardTitle>
                  </CardTitleContainer>
                </Card>
              ))}
          </CardsContainer>
          <ScrollBtn className="right" onClick={() => scrollThumbnails(200)}>
            <FaChevronRight />
          </ScrollBtn>
        </CardsAndArrowsContainer>
      )}
    </Container>
  );
};

export default GalleryView;
