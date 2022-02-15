import styled from '@emotion/styled';
import { ItemBox } from '@components/common';
import { useData } from '@hooks/useData';
import { ConItem } from '@types';
import { useState, useEffect } from 'react';

export const DealList = () => {
  const [items, setItems] = useState<ConItem[]>();
  const { data } = useData('con-items/soon');

  useEffect(() => {
    data && setItems(data.conItems);
  }, [data]);

  return (
    <DealListContainer>
      {items &&
        items.map((item: ConItem) => (
          <li key={item.id}>
            <ItemBox item={item} />
          </li>
        ))}
    </DealListContainer>
  );
};

const DealListContainer = styled.ul`
  margin-top: 13px;
`;
