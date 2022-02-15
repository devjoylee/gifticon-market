import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Options } from '@types';
import { COLOR } from '@constants';
import { getDate } from '@utils/getDate';

interface Props {
  option: Options;
  dcRate: number | undefined;
}

export const OptionContent = ({ option, dcRate }: Props) => {
  const date = getDate(option.expireAt);
  const price = option.sellingPrice.toLocaleString();
  return (
    <OptionBox>
      <div>
        <MainTop>
          <LabelText>유효기간</LabelText>
          <span>{date} 까지</span>
        </MainTop>
        <MainBottom>
          <LabelText>할인가</LabelText>
          <span>{price}원</span>
        </MainBottom>
      </div>
      <DiscounteRate>{dcRate}%</DiscounteRate>
    </OptionBox>
  );
};

const OptionBox = styled.li`
  display: flex;
  padding: 0 17px;
  align-items: center;
  border-bottom: 1px solid ${COLOR.GRAY_BORDER};
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
const DiscounteRate = styled.div`
  color: ${COLOR.RED};
  font-size: 17px;
  margin-left: auto;
`;
