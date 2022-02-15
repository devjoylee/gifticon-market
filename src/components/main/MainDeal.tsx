import styled from '@emotion/styled';
import { STYLE, COLOR } from '@constants';
import { ItemBox } from '@components/common';
import { useData } from '@hooks/useData';
import { ConItem } from '@types';
import { useState, useEffect } from 'react';

export const MainDeal = () => {
  const [items, setItems] = useState<ConItem[]>();
  const { data } = useData('con-items/soon');

  useEffect(() => {
    data && setItems(data.conItems);
  }, [data]);

  return (
    <MainDealContainer>
      <h3>
        <span>놓치지 마세요</span>
        오늘의 땡처리콘!
      </h3>
      <DealItems>
        {items &&
          items.map((item: ConItem) => (
            <li key={item.id}>
              <ItemBox item={item} />
            </li>
          ))}
      </DealItems>
    </MainDealContainer>
  );
};

const MainDealContainer = styled.section`
  h3 {
    font-size: 16px;
    padding-left: ${STYLE.PADDING};
    margin-bottom: 14px;

    span {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: ${COLOR.RED};
    }
  }
`;

const DealItems = styled.ul``;
