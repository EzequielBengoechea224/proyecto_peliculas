import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CardList from '../../components/CardList/CardList';


const Home = () => {



  return (
    <Box component="main" sx={{backgroundColor:'#161616'}}>
      <Typography variant='h6' sx={{ color: "white" }}>
        Home page
      </Typography>
      <CardList />
    </Box>
  );
};

export default Home;