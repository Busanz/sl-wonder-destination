import usePage from '../../hooks/usePage';
import PageSection from '../../components/PageSection';

const Heritage = () => {
  const { pageData } = usePage();

  return <PageSection pageData={pageData} />;
};

export default Heritage;
