import styled from '@emotion/styled';
import {
  MenuOutlined,
  SearchOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { HeaderContainer } from '@components/layout/Header';

export const MainHeader = () => {
  return (
    <MainTop>
      <HeaderContainer>
        <MenuOutlined />
        <h2>니콘내콘</h2>
        <div>
          <SearchOutlined />
          <CreditCardOutlined />
        </div>
      </HeaderContainer>
    </MainTop>
  );
};

const MainTop = styled.div`
  z-index: 1000;
  width: inherit;
  max-width: inherit;

  span.anticon:last-child {
    margin-left: 20px;
  }
`;
