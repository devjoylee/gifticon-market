import { CAROUSEL_IMAGES, COLOR } from '@constants';
import styled from '@emotion/styled';
import React from 'react';

export const CarouselButton = () => {
  return (
    <ButtonUl>
      {CAROUSEL_IMAGES.map((image, i) => (
        <IndexButton key={`button-${i}`}></IndexButton>
      ))}
    </ButtonUl>
  );
};

const ButtonUl = styled.ul`
  position: absolute;
  bottom: 5px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80px;
  height: 25px;
`;

const IndexButton = styled.button`
  width: 12px;
  height: 12px;
  background-color: ${COLOR.WHITE};
  border-radius: 50%;
  cursor: pointer;
`;
