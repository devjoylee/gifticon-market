import styled from '@emotion/styled';
import {
  MenuOutlined,
  SearchOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div>
        <MenuOutlined />
        <SearchOutlined />
        <CreditCardOutlined />
      </div>
      <main>{children}</main>
    </div>
  );
};
