import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, dialogClasses } from '@mui/material';
import HomeCard from '../HomeCard/HomeCard';

const CardListContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '910a1a966a0935dd0776ca012c55af03'; // Reemplaza con tu propia API key
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

        const response = await axios.get(apiUrl);

        setMovies(response.data.results);
      } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
      }
    };

    fetchData();
  }, []); // [] significa que se ejecuta solo una vez al montar el componente

  return (
    <Grid container spacing={4} sx={{}}>
      {movies.map((movie) => (
            <HomeCard movie={movie} key={movie.name}/>
      ))}
    </Grid>
  );
};

export default CardListContainer;