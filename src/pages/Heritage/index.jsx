import usePage from '../../hooks/usePage';
import useTop from '../../hooks/useTop';
import PageSection from '../../components/PageSection';

const Heritage = () => {
  const { pageData } = usePage();
  useTop();
  return <PageSection pageData={pageData} />;
};

export default Heritage;
