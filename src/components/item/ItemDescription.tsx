import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@constants';

interface Props {
  desc: string;
}
interface Description {
  label: string;
  text: string;
}

export const ItemDescription = ({ desc }: Props) => {
  let descriptions: Description[] = [];
  const sliceRestricted = desc.replace('\n[사용 불가 매장]\n', '');
  const splitDesc = sliceRestricted.split('\n\n');
  const labelRegex = new RegExp('\\[.*\\n', 'g');
  splitDesc.forEach((text, i) => {
    const rawLabel = text.match(labelRegex)![0];
    const labelString = rawLabel.slice(1, rawLabel.length - 2);
    const descText = text.slice(rawLabel.length).replaceAll('-', '·');
    const newDesc = { label: labelString, text: descText };
    descriptions.push(newDesc);
  });
  return (
    <DescContainer>
      {descriptions.map((data, i) => (
        <DescBox key={`desc-${i}`}>
          <Label>{data.label}</Label>
          <p>{data.text}</p>
        </DescBox>
      ))}
    </DescContainer>
  );
};

const DescContainer = styled.div`
  padding: 0 20px;
  margin-top: 30px;
  font-size: 14px;
`;

const DescBox = styled.div`
  margin-bottom: 20px;
  & > p {
    white-space: pre-line;
    margin-bottom: 20px;
    color: ${COLOR.GRAY_FONT};
    line-height: 25px;
  }
`;

const Label = styled.div`
  margin-bottom: 5px;
`;
