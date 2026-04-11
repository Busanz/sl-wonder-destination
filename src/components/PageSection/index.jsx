import Box from '@mui/material/Box';
import ImgMediaCard from '../MUI/ImgMediaCard';

const PageSection = ({ pageData }) => {
  return (
    <Box
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
    </Box>
  );
};

export default PageSection;
