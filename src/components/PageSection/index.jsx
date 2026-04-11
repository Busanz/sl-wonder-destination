import Box from '@mui/material/Box';
import ImgMediaCard from '../MUI/ImgMediaCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import { categoriesHeader } from '../../data/data';

const PageSection = ({ pageData }) => {
  if (!pageData || pageData.length === 0) return null;

  console.log(pageData[0].type);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {Array.isArray(pageData) &&
          categoriesHeader
            .filter((item) => item.id === pageData[0].type)
            .map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '100%',
                  mt: 4,
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ textAlign: 'center', fontWeight: 100 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    width: '100%',
                    mx: 'auto',
                    mt: 4,
                    fontWeight: 200,
                    fontSize: '1.18rem',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
        <Container
          maxWidth="md"
          sx={{
            p: 3,
            mt: 5,
            borderRadius: '6px',
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {Array.isArray(pageData) &&
            pageData.map((destination) => (
              <ImgMediaCard key={destination.id} {...destination} />
            ))}
        </Container>
      </Box>
    </>
  );
};

export default PageSection;
