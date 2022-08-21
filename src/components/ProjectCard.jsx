import React from 'react';
// import { Box } from '@mui/material';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

const ProjectCard = ({ title, time, img, desc, link }) => {
  return (
    <Card
      onClick={() => {
        if (link) {
          window.location.href = link;
        }
      }}
      sx={{
        width: 400,
        p: '0.2rem',
        m: '1rem',
        '&:hover': {
          transition: 'all 0.2s ease-out',
          transform: 'scale(1.006, 1.006)',
          boxShadow:
            'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(48, 46, 56, 0.1) 0px 10px 100px 0px',
        },
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(48, 46, 56, 0.06) 0px 3px 20px 0px',

        cursor: link ? 'pointer' : null,
      }}
    >
      <CardMedia component="img" height="300" image={img} alt={title} />
      <CardHeader title={title} subheader={time} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
