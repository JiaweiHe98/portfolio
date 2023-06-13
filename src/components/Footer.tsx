import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ bgcolor: '#000' }}>
      <Typography
        variant="body1"
        sx={{
          color: '#fff',
          textAlign: 'center',
          padding: '1rem',
          fontWeight: 300,
        }}
      >
        Made with ❤️ by Jiawei He. Copyright &copy; {currentYear} Jiawei He. All
        rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
