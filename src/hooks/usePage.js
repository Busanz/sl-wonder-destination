import { useLocation } from 'react-router-dom';
import useFetch from './useFetch';

const usePage = () => {
  const { pathname } = useLocation();
  const pageData = useFetch(pathname.substring(1));
  return { pathname, pageData };
};

export default usePage;
