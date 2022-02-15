import React, { useEffect, useState } from 'react';
import { useData } from '@hooks/useData';
import { ConCategory2 } from '@types';
import { ItemLink } from './ItemLink';

interface ItemListProps {
  id: string | string[];
  categoryId: string | string[];
}

export const ItemList = ({ id, categoryId }: ItemListProps) => {
  const { data } = useData(`con-category1s/${categoryId}/nested`);
  const [brand, setBrand] = useState<ConCategory2>();

  useEffect(() => {
    const brands = data && data.conCategory1.conCategory2s;
    brands &&
      brands.map((brand: ConCategory2) => {
        if (brand.id === Number(id)) {
          setBrand(brand);
        }
      });
  }, [brand, data, id]);

  return (
    <ul>
      {brand &&
        brand.conItems.map(item => (
          <li key={item.id}>
            <ItemLink item={item} />
          </li>
        ))}
    </ul>
  );
};
