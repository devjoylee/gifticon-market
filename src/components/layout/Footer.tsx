import styled from '@emotion/styled';
import { COLOR, STYLE } from '@constants';

export const Footer = () => {
  return <FooterContainer>footer</FooterContainer>;
};

const FooterContainer = styled.footer`
  padding: 20px ${STYLE.PADDING};
  background-color: ${COLOR.GRAY};
  border-top: 1px solid #ccc;
`;
