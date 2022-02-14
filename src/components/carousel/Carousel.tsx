import React from 'react';
import styled from '@emotion/styled';
import { CarouselButton } from './CarouselButton';
import { CarouselImage } from './CarouselImage';
import { CAROUSEL_IMAGES, MAIN_WIDTH } from '@constants';

export const Carousel = () => {
  const carouselLength = CAROUSEL_IMAGES.length - 1;
  return (
    <CarouselContainer>
      <CarouselBox>
        <CarouselUl>
          <img src={CAROUSEL_IMAGES[carouselLength].src} alt="carouselImage" />
          {CAROUSEL_IMAGES.map((img, i) => (
            <CarouselImage key={`carouselImage-${i}`} image={img} />
          ))}
          <img src={CAROUSEL_IMAGES[0].src} alt="carouselImage" />
        </CarouselUl>
      </CarouselBox>
      <CarouselButton />
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 185px;
  overflow: hidden;
`;

const CarouselBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(-${MAIN_WIDTH});
`;

const CarouselUl = styled.ul`
  display: flex;
  & > img {
    flex-shrink: 0;
    width: ${MAIN_WIDTH};
    height: 100%;
    object-fit: cover;
  }
`;
