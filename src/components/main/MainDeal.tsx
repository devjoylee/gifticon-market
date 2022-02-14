import styled from '@emotion/styled';
import { STYLE, COLOR } from '@constants';
import { useData } from '@hooks/useData';
import { ConItem } from '@types';

export const MainDeal = () => {
  const { dataList } = useData('con-items/soon');
  console.log(dataList);

  return (
    <MainDealContainer>
      <h3>
        <span>놓치지 마세요</span>
        오늘의 땡처리콘!
      </h3>
      <DealItems>
        {dataList.map((item: ConItem) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </DealItems>
    </MainDealContainer>
  );
};

const MainDealContainer = styled.section`
  h3 {
    font-size: 16px;
    padding-left: ${STYLE.PADDING};

    span {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: ${COLOR.RED};
    }
  }
`;

const DealItems = styled.ul``;
