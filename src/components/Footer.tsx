import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      component="footer"
      className="py-3 flex-col md:flex-row flex justify-center"
      sx={{ bgcolor: '#000' }}
    >
      <Typography
        className="text-sm md:text-base"
        variant="body1"
        sx={{
          color: '#fff',
          textAlign: 'center',
          paddingX: 0.5,
          fontWeight: 300,
        }}
      >
        Made with ❤️ by Jiawei He.
      </Typography>
      <Typography
        className="text-sm md:text-base"
        variant="body1"
        sx={{
          color: '#fff',
          textAlign: 'center',
          paddingX: 0.5,
          fontWeight: 300,
        }}
      >
        Copyright &copy; {currentYear} Jiawei He.
      </Typography>
      <Typography
        className="text-sm md:text-base"
        variant="body1"
        sx={{
          color: '#fff',
          textAlign: 'center',
          paddingX: 0.5,
          fontWeight: 300,
        }}
      >
        All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
