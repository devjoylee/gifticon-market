import React from 'react';
import { useEffect, useState } from 'react';
import { ConCard } from '@components/common';
import { useData } from '@hooks/useData';
import { Category } from '@types';
import { STYLE } from '@constants';
import styled from '@emotion/styled';

export const CategoryTab = () => {
  const { data } = useData(`con-category1s`);
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    data && setCategories(data.conCategory1s);
  }, [data]);

  return (
    <TabSection>
      {categories &&
        categories.map((category: Category) => (
          <TabName key={category.id}>{category.name}</TabName>
        ))}
    </TabSection>
  );
};

const TabName = styled.div``;

const TabSection = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  height: 41px;
  background-color: #fff;
  font-size: 16px;
`;
