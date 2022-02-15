import React from 'react';
import styled from '@emotion/styled';
import { Options } from '@types';
import { COLOR } from '@constants';
import { OptionContent } from './OptionContent';

interface Props {
  options: Options[];
}
export const OptionList = ({ options }: Props) => {
  return (
    <ListContainer>
      <ListHeader>옵션 선택하기</ListHeader>
      <OptionBox>
        {options.map((option, i) => (
          <OptionContent key={`option-${i}`} option={option} />
        ))}
      </OptionBox>
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  position: absolute;
  width: 100%;
  bottom: 80px;
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
  height: 210px;
  overflow: scroll;
  & > li {
    flex-shrink: 0;
    height: 70px;
  }
`;
