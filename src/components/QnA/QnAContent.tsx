import React from 'react';
import styled from '@emotion/styled';
import { QCDProps } from '@types';
import { COLOR } from '@constants';
import { QnAContentItem } from '.';

export const QnAContent = ({ QnAContentData, name }: QCDProps) => {
  return (
    <Container>
      <h2 className="sr-only">{name} 고객 센터</h2>
      <ul>
        {QnAContentData.map(data => {
          return (
            <QnAContentItem
              key={`QnAContentData_${data.id}`}
              data={data}
            ></QnAContentItem>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.section`
  background-color: ${COLOR.WHITE};
`;
