import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImgMediaCard = ({ id, type, image_url, name, description }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="240"
        image={imageError ? 'default-fallback-image.png' : image_url}
        onError={() => setImageError(true)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', textAlign: 'left' }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/${type}/${id}`)}>
          Explore More
        </Button>
      </CardActions>
    </Card>
  );
};
export default ImgMediaCard;
