import { useNavigate } from 'react-router-dom';
import Categories from '../../components/Categories';
import { categoriesHeader } from '../../data/data';
import styles from './home.module.css';
import Button from '@mui/material/Button';

const Home = () => {
  const buttonNavigation = useNavigate();
  return (
    <>
      {categoriesHeader.map((section, index) => (
        <div key={index} className={styles.home}>
          {section.id === 'home' ? (
            <h1>{section.title}</h1>
          ) : section.id !== 'about' ? (
            <h2>{section.title}</h2>
          ) : null}
          {section.id !== 'about' ? <p>{section.description}</p> : ''}

          {section.id !== 'home' && section.id !== 'about' && (
            <>
              <Button
                sx={{ px: 5, py: '10px', mt: 3 }}
                variant="contained"
                onClick={() => buttonNavigation(`/${section.id}`)}
              >
                Explore more
              </Button>
              <Categories categorie={section.id} />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Home;
