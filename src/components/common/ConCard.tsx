import React from 'react';
import { Category } from '@types';
import Link from 'next/link';
import styled from '@emotion/styled';

interface CategoryProps {
  category: Category;
}

export const ConCard = ({ category }: CategoryProps) => {
  return (
    <LinkBox>
      <Link href={`/categories/${category.id}`} passHref key={category.id}>
        <a>
          <img src={category.imageUrl} />
          <span>{category.name}</span>
        </a>
      </Link>
    </LinkBox>
  );
};

const LinkBox = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    background: #fff;
    height: 8rem;
    span {
      margin-top: 10px;
      font-size: 15px;
    }
    img {
      width: 45px;
      height: 45px;
    }
  }
`;
