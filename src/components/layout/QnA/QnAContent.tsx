import React from 'react';
import styled from '@emotion/styled';
import { QCD } from '@types';

export const QnAContent = ({ QnAContentData, name }: QCD) => {
  return (
    <Container>
      <h2 className="sr-only">{name} 고객 센터</h2>
      {QnAContentData.map(data => {
        const { id, answer, question } = data;
        return <div key={`QnAContentData_${id}`}>{question}</div>;
      })}
    </Container>
  );
};

const Container = styled.article``;
