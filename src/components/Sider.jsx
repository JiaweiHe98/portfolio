import React from 'react';
import { Box, Link } from '@mui/material';

import './Sider.css';

const linkStyle = {
  m: '0.5rem',
  p: '0.5rem',
  textDecoration: 'none',
  '&:hover': { borderRadius: '8px' },
  color: '#fff',
};

export const Sider = () => {
  return (
    <Box
      className="sider"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        bgcolor: '#a2d2ff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Link variant="h6" sx={linkStyle} href="#section1">
          About me
        </Link>
        <Link variant="h6" sx={linkStyle} href="#section2">
          Education
        </Link>
        <Link variant="h6" sx={linkStyle} href="#section3">
          Projects
        </Link>
      </Box>
    </Box>
  );
};
