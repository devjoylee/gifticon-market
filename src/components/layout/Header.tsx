import Link from 'next/link';
import styled from '@emotion/styled';
import { HomeOutlined } from '@ant-design/icons';
import { COLOR, STYLE } from '@constants';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <HomeOutlined />
        </a>
      </Link>
      <h2>{title}</h2>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  max-width: inherit;
  height: ${STYLE.HEADER_H};
  padding: 0 ${STYLE.PADDING};
  background-color: ${COLOR.WHITE};

  span.anticon {
    display: inline-block;
    cursor: pointer;
    svg {
      font-size: 24px;
    }
  }

  h2 {
    flex: 1;
    font-size: 17px;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }

  span.anticon,
  a {
    z-index: 999;
  }

  & + section {
    padding-top: ${STYLE.HEADER_H};
  }
`;
