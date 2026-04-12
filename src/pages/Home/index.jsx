import { useNavigate } from 'react-router-dom';
import Categories from '../../components/Categories';
import { categoriesHeader } from '../../data/data';
import styles from './home.module.css';
import Button from '@mui/material/Button';

const Home = () => {
  const buttonNavigation = useNavigate();
  return (
    <>
      {categoriesHeader
        .filter((section) => section.id !== 'about')
        .map((section, index) => (
          <div
            key={index}
            className={index === 0 ? styles.home : styles.categorie}
          >
            {section.id === 'home' ? (
              <h1>{section.title}</h1>
            ) : (
              <h2>{section.title}</h2>
            )}
            <p>{section.description}</p>

            {section.id !== 'home' && (
              <>
                <Button
                  sx={{
                    px: 5,
                    py: '10px',
                    mt: { xs: 3, sm: 4, md: 5 },
                    mb: { xs: 3, sm: 4, md: 5 },
                    mr: { xs: 'auto', sm: 'auto', md: 0 },
                    width: '200px',
                  }}
                  variant="outlined"
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
