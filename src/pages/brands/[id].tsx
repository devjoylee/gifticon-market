import { NextPage } from 'next';
import { useRouter } from 'next/router';

const BrandsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <section>상품리스트 {id}</section>;
};

export default BrandsPage;
