import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
} from '@mui/material';

const Destination = () => {
  const { type, id } = useParams();
  const destinationData = useFetch(type);

  const destination = destinationData?.find((des) => des.id.toString() === id);

  const highlights = destination?.highlights
    ? destination.highlights.replace(/[{}"]/g, '').split(',')
    : [];
  console.log(destination);
  return (
    destination && (
      <>
        <Container maxWidth="md" sx={{ my: 5 }}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={destination.image_url || 'default-fallback-image.png'}
              alt={destination.name}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {destination.name}
              </Typography>

              <Typography sx={{ mt: 1, mb: 3, textAlign: 'left' }}>
                {destination.description}
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                {destination.province} province 🟢 {destination.type}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Chip label={`⭐ ${destination.rating}`} />
                <Chip label={`${destination.days} days`} />
                <Chip label={`Cost level: ${destination.cost}`} />
                <Chip label={`Entrance fee: ${destination.entrance_fee_usd}`} />
              </Stack>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Travel Tips
                </Typography>
                <Typography sx={{ mt: 1, mb: 3, textAlign: 'left' }}>
                  {destination.tips}
                </Typography>
                <Typography sx={{ mt: 1, mb: 3, textAlign: 'left' }}>
                  {destination.transport}
                </Typography>
                <Typography sx={{ mt: 1, mb: 3, textAlign: 'left' }}>
                  {destination.nearby_food}
                </Typography>
                transport
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6">Highlights</Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mt: 1, mb: 3, flexwrap: 'wrap', textalign: 'left' }}
                >
                  {Array.isArray(highlights) &&
                    highlights.map((item, index) => (
                      <Chip variant="outlined" key={index} label={item} />
                    ))}
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </>
    )
  );
};

export default Destination;
