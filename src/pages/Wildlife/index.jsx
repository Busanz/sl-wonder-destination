import usePage from '../../hooks/usePage';
import PageSection from '../../components/PageSection';

const Wildlife = () => {
  const { pathname, pageData } = usePage();

  return <PageSection currentLocation={pathname} pageData={pageData} />;
};

export default Wildlife;
