import Box from '@mui/material/Box';
import styles from './categories.module.css';
import useFetch from '../../hooks/useFetch';
import ImgMediaCard from '../MUI/ImgMediaCard';

const Categories = ({ categorie }) => {
  const data = useFetch(categorie);
  return (
    <Box
      className={styles.categories}
      sx={{ p: { sm: 0, md: 1 }, mt: 2, borderRadius: '6px' }}
    >
      {Array.isArray(data) &&
        data
          .slice(0, 4)
          .map((designation) => (
            <ImgMediaCard key={designation.id} {...designation} />
          ))}
    </Box>
  );
};
export default Categories;
