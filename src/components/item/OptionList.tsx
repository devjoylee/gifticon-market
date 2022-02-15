import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Options } from '@types';
import { COLOR } from '@constants';
import { OptionContent } from './OptionContent';

interface Props {
  options: Options[];
  isOpen: boolean;
  dcRate: number | undefined;
}
export const OptionList = ({ options, isOpen, dcRate }: Props) => {
  return (
    <ListContainer className={isOpen ? 'active' : ''}>
      <ListHeader>옵션 선택하기</ListHeader>
      <OptionBox>
        {options.map((option, i) => (
          <OptionContent key={`option-${i}`} option={option} dcRate={dcRate} />
        ))}
      </OptionBox>
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  position: absolute;
  z-index: 100;
  max-height: 0;
  width: 100%;
  bottom: 47px;
  transition: all 0.2s ease-in-out;
  &.active {
    max-height: 672px;
  }
`;

const ListHeader = styled.li`
  height: 50px;
  padding: 0 17px;
  line-height: 50px;
  background-color: ${COLOR.GRAY};
  font-weight: 500;
`;

const OptionBox = styled.ul`
  display: flex;
  flex-direction: column;
  height: 280px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${COLOR.WHITE};
  & > li {
    flex-shrink: 0;
    height: 70px;
  }
`;
