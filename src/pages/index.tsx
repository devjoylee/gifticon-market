import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { COLOR, STYLE } from '@constants';
import { Header, Footer } from '@components/layout';
import { MainHeader, MainCategory } from '@components/main/';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
      </Head>
      <MainHeader />
      <MainPage>
        <div>Carousel</div>
        <MainCategory />
        <div>오늘의 땡처리콘!</div>
      </MainPage>
      <Footer />
    </>
  );
};

export default Home;

const MainPage = styled.main`
  padding: ${STYLE.HEADER_H} ${STYLE.PADDING} 0;
  background-color: ${COLOR.GRAY};
`;
