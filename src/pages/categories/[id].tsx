import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CategoriesPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <section>브랜드페이지 {id}</section>;
};

export default CategoriesPage;
