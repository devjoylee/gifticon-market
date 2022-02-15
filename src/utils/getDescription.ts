import { Description } from '@types';

export const getDescription = async (desc: string) => {
  let descriptions: Description[] = [];
  const sliceRestricted = desc && desc.replace('\n[사용 불가 매장]\n', '');
  const splitDesc = sliceRestricted.split('\n\n');
  const labelRegex = new RegExp('\\[.*\\n', 'g');
  splitDesc.forEach((text, i) => {
    const rawLabel = text.match(labelRegex)![0];
    const labelString = rawLabel.slice(1, rawLabel.length - 2);
    const descText = text.slice(rawLabel.length).replaceAll('-', '·');
    const newDesc = { label: labelString, text: descText };
    descriptions.push(newDesc);
  });
  return descriptions;
};
