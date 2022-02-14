import { Carousel } from '@components/carousel/Carousel';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { COLOR, STYLE } from '@constants';
import { Footer } from '@components/layout';
import { MainHeader, MainCategory, MainDeal } from '@components/main/';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
      </Head>
      <MainHeader />
      <MainPage>
        <Carousel />
        <MainCategory />
        <MainDeal />
      </MainPage>
      <Footer />
    </>
  );
};

export default Home;

const MainPage = styled.main`
  padding-top: ${STYLE.HEADER_H};
  background-color: ${COLOR.GRAY};
`;
