import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import "./HomeCard.css" ;

const HomeCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; // URL base de la imagen

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}> {/* Ajusta los tamaños de Grid según tus necesidades */}
      <Card sx={{ maxWidth: 345, margin: 'auto'}}>
        <CardMedia
          component="img"
          alt={movie.title}
          height="450" // Altura ajustada para que la imagen se vea completa
          image={imageUrl}
          sx={{
            objectFit: 'cover', // Ajusta la imagen para que cubra toda la tarjeta
          }}
        />
      </Card>
    </Grid>
  );
};

export default HomeCard;