import React from 'react';
import styled from '@emotion/styled';

interface Props {
  desc: string;
}

export const ItemDescription = ({ desc }: Props) => {
  return (
    <DescContainer>
      <p>{desc}</p>
    </DescContainer>
  );
};

const DescContainer = styled.div`
  padding: 0 17px;
`;
