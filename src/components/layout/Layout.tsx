import styled from '@emotion/styled';
import {
  MenuOutlined,
  SearchOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { COLOR } from '@constants';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <div>
        <MenuOutlined />
        <SearchOutlined />
        <CreditCardOutlined />
      </div>
      <main>{children}</main>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 672px;
  width: 100vw;
  background-color: ${COLOR.WHITE};
`;
