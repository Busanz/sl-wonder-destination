import usePage from '../../hooks/usePage';
import PageSection from '../../components/PageSection';

const Beach = () => {
  const { pageData } = usePage();

  return <PageSection pageData={pageData} />;
};

export default Beach;
