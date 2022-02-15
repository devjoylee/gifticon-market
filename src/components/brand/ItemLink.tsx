import React from 'react';
import styled from '@emotion/styled';
import { ConItem } from '@types';
import { ItemBox } from '../common';
import Link from 'next/link';

interface ItemLinkProps {
  item: ConItem;
}

export const ItemLink = ({ item }: ItemLinkProps) => {
  return (
    <Link href="/" passHref>
      <a>
        <ItemBox item={item} />
      </a>
    </Link>
  );
};

export const ItemListContainer = styled.ul``;
