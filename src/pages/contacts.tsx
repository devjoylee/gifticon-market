import { QnAContainer } from '@components/QnA';
import { useData } from '@hooks/useData';
import { NextPage } from 'next';

const ContactsPage: NextPage = () => {
  const { data: QnATypeData, error: QnATypeError } = useData('qa-types');
  if (!QnATypeData) return <div>로딩중..</div>;
  if (QnATypeError) return <div>페이지 에러</div>;

  return (
    <div>
      <QnAContainer QnATypeData={QnATypeData.qaTypes} />
    </div>
  );
};

export default ContactsPage;
