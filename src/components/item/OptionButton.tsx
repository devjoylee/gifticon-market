import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@constants';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const OptionButton = ({ isOpen, setIsOpen }: Props) => {
  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <Button className={isOpen ? 'active' : ''} onClick={handleOpen}>
      {isOpen ? '구매하기' : '옵션 선택하기'}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 47px;
  bottom: 0;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  &.active {
    background-color: ${COLOR.GRAY_BUTTON};
    color: ${COLOR.WHITE};
  }
`;
