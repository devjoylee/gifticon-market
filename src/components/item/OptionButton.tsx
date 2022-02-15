import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@constants';

export const OptionButton = () => {
  return <Button>옵션 선택하기</Button>;
};

const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 80px;
  padding-bottom: 10px;
  bottom: 0;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;
