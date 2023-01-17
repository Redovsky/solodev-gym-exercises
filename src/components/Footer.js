import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Redovsky_logo_Solodev_4k_detailed.png';
import Slogo from '../assets/images/Slogo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#D8DEE0" borderRadius='20px'>
      <Stack direction="row" gap="5px" sx={{ alignItems: 'center', justifyContent: 'center' }} flexWrap="wrap" px="40px" pt="24px">
        <Link to="/"><img src={Logo} alt="logo" style={{ width: '70px', height: '60px' }} /></Link>
        <img src={Slogo} alt="Slogo" style={{ width: '100px', height: '50px' }} />
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Enjoy training with <span style={{ color: '#901621', textTransform: 'capitalize' }}>Solodev Fitness Club</span></Typography>
    </Box>
  );
};

export default Footer;