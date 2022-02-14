import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ItemsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <section>상품상세 {id}</section>;
};

export default ItemsPage;
