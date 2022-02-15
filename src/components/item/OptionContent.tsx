import React from 'react';
import styled from '@emotion/styled';
import { Options } from '@types';
import { COLOR } from '@constants';

interface Props {
  option: Options;
}

export const OptionContent = ({ option }: Props) => {
  return (
    <OptionBox>
      <div>
        <MainTop>
          <LabelText>유효기간</LabelText>
          <span>{option.expireAt} 까지</span>
        </MainTop>
        <MainBottom>
          <LabelText>할인가</LabelText>
          <span>{option.sellingPrice}원</span>
        </MainBottom>
      </div>
      <div></div>
    </OptionBox>
  );
};

const OptionBox = styled.li`
  display: flex;
  padding: 0 17px;
  align-items: center;
`;

const LabelText = styled.span`
  display: inline-block;
  width: 44px;
  font-size: 12px;
  color: ${COLOR.GRAY_DARK};
  margin-right: 9px;
`;

const MainBox = styled.div``;
const MainTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;
const MainBottom = styled.div`
  display: flex;
  align-items: center;
`;
const DiscounteRate = styled.div``;
