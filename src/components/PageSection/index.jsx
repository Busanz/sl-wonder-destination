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
                  mt: 4,
                  mx: 2,
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    textAlign: { sm: 'left', md: 'center' },
                    fontSize: { xs: '1.6rem', sm: '1.7rem', md: '2rem' },
                    fontWeight: 100,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    width: '100%',
                    mx: { sm: 0, md: 'auto' },
                    mt: { sm: 2, md: 4 },
                    fontWeight: 200,
                    fontSize: { xs: '1rem', sm: '1.05rem', md: '1.18rem' },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
        <Container
          maxWidth="lg"
          sx={{
            p: 3,
            mt: 5,
            mb: 4,
            borderRadius: '6px',
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: { xs: 'left', sm: 'left', md: 'center' },
            bgcolor: '#ebeafd',
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
