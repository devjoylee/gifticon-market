import styled from '@emotion/styled';
import { COLOR, STYLE } from '@constants';
import { Header } from './';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header title="카테고리명" />
      <>{children}</>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: ${STYLE.MAIN_WIDTH};
  width: 100vw;
  height: 100%;
  background-color: ${COLOR.GRAY};
`;
