import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ItemContent } from './ItemContent';
import { ItemDescription } from './ItemDescription';
import { OptionButton } from './OptionButton';
import { OptionList } from './OptionList';
import { COLOR, STYLE } from '@constants';
import { useData } from '@hooks/useData';
import { ConItem } from '@types';

interface Props {
  id: string | string[];
}

export const Item = ({ id }: Props) => {
  const [itemData, setItemData] = useState<ConItem | null>(null);
  const { data } = useData(`con-items/${id}`);
  useEffect(() => {
    if (data) {
      setItemData(data.conItem);
    }
  }, [data]);
  console.log(itemData);
  return (
    itemData && (
      <ItemContainer>
        <ItemContent itemData={itemData} />
        <ItemDescription desc={itemData.warning} />
        <OptionList options={itemData.options} />
        <OptionButton />
      </ItemContainer>
    )
  );
};

const ItemContainer = styled.section`
  position: relative;
  padding-top: ${STYLE.HEADER_H};
  background-color: ${COLOR.WHITE};
  height: 100vh;
`;
