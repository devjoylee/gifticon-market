import styled from '@emotion/styled';
import { COLOR } from '@constants';
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
  max-width: 672px;
  width: 100vw;
  background-color: ${COLOR.GRAY};
`;
