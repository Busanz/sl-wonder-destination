import usePage from '../../hooks/usePage';
import PageSection from '../../components/PageSection';

const Wildlife = () => {
  const { pageData } = usePage();

  return <PageSection pageData={pageData} />;
};

export default Wildlife;
