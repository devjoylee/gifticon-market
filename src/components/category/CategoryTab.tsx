import React from 'react';
import { useEffect, useState } from 'react';
import { useData } from '@hooks/useData';
import { Category } from '@types';
import { COLOR } from '@constants';
import styled from '@emotion/styled';
import Link from 'next/link';

interface Props {
  id: string | string[];
}

export const CategoryTab = ({ id }: Props) => {
  const { data } = useData(`con-category1s`);
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    data && setCategories(data.conCategory1s);
  }, [data]);

  return (
    <TabSection>
      {categories &&
        categories.map((category: Category) => (
          <Link href={`/categories/${category.id}`} key={category.id} passHref>
            <TabName className={`${category.id}` === `${id}` ? 'active' : ''}>
              {category.name}
            </TabName>
          </Link>
        ))}
    </TabSection>
  );
};

const TabName = styled.button`
  padding: 10px 14px;
  height: 41px;
  border-bottom: 1px solid ${COLOR.GRAY_BORDER};
  cursor: pointer;
  &.active {
    color: ${COLOR.RED};
    border-bottom: 3px solid ${COLOR.RED};
  }
`;

const TabSection = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  height: 41px;
  background-color: #fff;
  font-size: 16px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
