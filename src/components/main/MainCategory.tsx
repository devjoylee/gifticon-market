import styled from '@emotion/styled';
import Link from 'next/link';
import { STYLE } from '@constants';

export const MainCategory = () => {
  return (
    <CategoryContainer>
      <Link href="/categories/1">
        <a>땡철이</a>
      </Link>
      <Link href="/categories/2">
        <a>카페</a>
      </Link>
      <Link href="/categories/3">
        <a>편의점, 마트</a>
      </Link>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
  padding: ${STYLE.PADDING};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: #fff;
    height: 8rem;
  }
`;
