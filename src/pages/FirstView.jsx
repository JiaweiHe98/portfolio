import React from 'react';
import { Box, Avatar, Typography, Link } from '@mui/material';

const FirstView = () => {
  return (
    <Box
      sx={{
        pl: '20%',
        pr: '8rem',
        pt: '30vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '60%' }}>
        <Box>
          <Typography
            variant="h1"
            sx={{ fontFamily: 'Handlee', fontWeight: 600 }}
          >
            Jiawei He
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ mb: '1rem' }}>
            3607 Spring Garden St, Unit 5, Philadelphia, PA | (321) 294-7188 |{' '}
            <Link href="mailto:jhe2021@seas.upenn.edu">
              jhe2021@seas.upenn.edu
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">
            Hi!👋 Welcome to my portfolio! I am a masters student @ University
            of Pennsylvania in Scientific Computing (Computational Science). I'm
            enthusiastic about coding, eager to learn new technologies and
            frameworks and seeking for a career as software developer for both
            backend and frontend.
          </Typography>
        </Box>
        <Box sx={{ mt: '2rem' }}>
          <Typography variant="h6">
            Scroll down to explore more about me! ⤵️.
          </Typography>
        </Box>
      </Box>
      {/* text-avatar */}
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt="Jiawei He"
          src="/jiaweihe.jpg"
          sx={{ width: 300, height: 300 }}
        />
      </Box>
    </Box>
  );
};

export default FirstView;
