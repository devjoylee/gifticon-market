import React from 'react';
import { useEffect, useState } from 'react';
import { CategoryTab } from './CategoryTab';
import { ConCard } from '@components/common';
import { useData } from '@hooks/useData';
import { ConCategory1 } from '@types';
import { STYLE, COLOR } from '@constants';
import styled from '@emotion/styled';

interface Props {
  id: string | string[];
}

export const CategoryBox = ({ id }: Props) => {
  const { data } = useData(`con-category1s/${id}/nested`);
  const [categories, setCategories] = useState<ConCategory1[]>();

  useEffect(() => {
    data && setCategories(data.conCategory1.conCategory2s);
  }, [data]);

  return (
    <CategoryContainer>
      <CategoryTab id={id} />
      <ul>
        {categories &&
          categories.map((category: ConCategory1) => (
            <ConCard key={category.id} category={category} />
          ))}
      </ul>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.section`
  overflow: auto;
  height: 100vh;
  background-color: ${COLOR.GRAY};
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px;
    padding: ${STYLE.PADDING};
  }
`;
