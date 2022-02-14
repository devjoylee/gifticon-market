import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useData } from '@hooks/useData';
import { COLOR } from '@constants';

interface Toggle {
  toggle: boolean;
}

export const OftenQnA = () => {
  const [toggle, setToggle] = useState(true);
  const handleBuyBtn = () => {
    if (!toggle) setToggle(!toggle);
  };
  const handleSellBtn = () => {
    if (toggle) setToggle(!toggle);
  };
  const { data: QnATypeData, error: QnATypeError } = useData('qa-types');
  const { data: QnAContentData, error: QnAContentError } = useData(
    'qas',
    `qaTypeId=${toggle ? 1 : 2}`
  );
  if (!QnATypeData || !QnAContentData) return <div>로딩중..</div>;
  if (QnATypeError || QnAContentError) return <div>페이지 에러</div>;
  console.log(QnATypeData);
  console.log(QnAContentData);

  return (
    <Container>
      <Title>자주 묻는 질문</Title>
      <ToggleContainer>
        <BuyBtn type="button" toggle={toggle} onClick={handleBuyBtn}>
          구매
        </BuyBtn>
        <SellBtn type="button" toggle={!toggle} onClick={handleSellBtn}>
          판매
        </SellBtn>
      </ToggleContainer>
    </Container>
  );
};

const Container = styled.article`
  padding: 15px 15px 0 15px;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
`;
const ToggleContainer = styled.div``;
const BuyBtn = styled.button<Toggle>`
  padding: 15px 0;
  color: ${({ toggle }) => (toggle ? COLOR.RED : COLOR.BLACK)};
  border-bottom: 2px solid ${({ toggle }) => (toggle ? COLOR.RED : COLOR.WHITE)};
  width: 50%;
  cursor: pointer;
`;
const SellBtn = styled.button<Toggle>`
  padding: 15px 0;
  margin-top: 20px;
  color: ${({ toggle }) => (toggle ? COLOR.RED : COLOR.BLACK)};
  border-bottom: 2px solid ${({ toggle }) => (toggle ? COLOR.RED : COLOR.WHITE)};
  width: 50%;
  cursor: pointer;
`;
