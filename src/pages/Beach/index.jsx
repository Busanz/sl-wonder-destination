import usePage from '../../hooks/usePage';
import PageSection from '../../components/PageSection';

const Beach = () => {
  const { pathname, pageData } = usePage();

  return <PageSection currentLocation={pathname} pageData={pageData} />;
};

export default Beach;
